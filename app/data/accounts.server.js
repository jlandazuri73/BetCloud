import { prisma } from "./database.server";
import { hash, compare } from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { dataDefault } from "./default.server";
import { addToQueue, consumeFromQueue } from "../queues/config";
const SESSION_SECRET = process.env.SESSION_SECRET;

// Cookie
const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

// Creando session
async function createUserSession(userId, redirectPath) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

// Numero random de 4 cifras
function getNumberRandom() {
  // Generar un número aleatorio entre 0 y 9999
  let number = Math.floor(Math.random() * 10000);
  // Asegurarse de que el número tenga exactamente 4 cifras
  number = ("000" + number).slice(-4);
  return number;
}

// Convierte string a minusculas y sin espacios
function formatString(varString) {
  // Convertir a minúsculas y eliminar espacios
  var result = varString.trim().toLowerCase().replace(/\s/g, "");
  return result;
}

// Creando el nombre de usuario
async function createUserName(name) {
  const nameByEmail = formatString(name);
  let isValidName = false;
  const existUserWithNameByEmail = await prisma.user.findFirst({
    where: {
      userName: nameByEmail,
    },
  });
  // Se le asigna el nombre sacado del correo electronico
  if (!existUserWithNameByEmail) {
    isValidName = true;
    return nameByEmail?.substring(0, 15);
  }
  // Creando un nombre de usuario con el email y 4 numeros aleatorios
  let newUserName = "";
  while (!isValidName) {
    let numberRandom = getNumberRandom();
    let userNameRandom = `${nameByEmail}${numberRandom}`;
    const existUserNameWithNameRandom = await prisma.user.findFirst({
      where: {
        userName: userNameRandom,
      },
    });
    if (!existUserNameWithNameRandom) {
      isValidName = true;
      newUserName = userNameRandom;
    }
  }
  return newUserName?.substring(0, 15);
}

// Registro de usuario
export async function signup({
  email,
  password,
  name,
  plan
}) {
  // Buscando si existe una cuenta con el email proporcionado
  const existingUserEmail = await prisma.user.findFirst({ where: { email } });
  //  Si existe alguna cuenta se retorna un error
  if (existingUserEmail) {
    const error = new Error(
      "Ya existe un usuario con el correo proporcionado."
    );
    error.status = 422;
    throw error;
  }
  // Encriptando la contraseña
  const passwordHash = await hash(password, 12);
  // Creando el nombre de usuario
  let newUserName = await createUserName(name);
  // Haciendo consultas necesarias
  await dataDefault();
  // Buscando rol para el usuario
  const roleUser = await prisma.role.findFirst({
    where: { name: "USER" },
  });
  const role = roleUser?.id;
  const newDataUser = {
    email,
    password: passwordHash,
    name,
    userName: newUserName,
    roleId: role,
    isVIP: Boolean(plan === "VIP")
  };
  const newUser = await prisma.user.create({
    data: newDataUser,
  });
  // Enviando el email de bienvenida por medio de la cola
  await addToQueue("EMAIL", { email, type: "WELCOME" });
  await consumeFromQueue("EMAIL");
  // Retornando la funcion que crea la sesion
  return createUserSession(newUser?.id, "/");
}

// Destruyendo session - Logout
export async function destroyUserSession(request, redirection = "/") {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  return redirect(redirection, {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

// Inicio de sesion del usuario
export async function login({ userName, password, redirectPath }) {
  // Buscando si existe cuenta por medio del nombre de usuario
  const existingUserName = await prisma.user.findFirst({ where: { userName } });
  const existingUserEmail = await prisma.user.findFirst({
    where: { email: userName },
  });
  const isEmail = userName?.includes("@");
  // Retornando un error si no existe una cuenta con el nombre de usuario o correo
  if (!existingUserName && !existingUserEmail) {
    const error = new Error(`El ${isEmail ? "correo" : "usuario"} no existe.`);
    error.status = 422;
    throw error;
  }
  const existingUser = isEmail ? existingUserEmail : existingUserName;
  // Consultado si la contraseña es correcta
  const passwordCorrect = await compare(password, existingUser?.password);
  // Retornando un error si la contraseña es incorrecta
  if (!passwordCorrect) {
    const error = new Error("Contraseña incorrecta.");
    error.status = 422;
    throw error;
  }
  // Logueando al usuario
  return createUserSession(existingUser?.id, redirectPath);
}

// Obteniendo la session del usuario
export async function getUserFromSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const userId = session.get("userId");

  if (!userId) {
    return null;
  }

  return userId;
}

// Seguridad - Validando que el usuario esta logueado
export async function requireUserSession(request) {
  const userId = await getUserFromSession(request);
  // Si no existe ningun ID en localStorage
  if (!userId) {
    throw redirect("/accounts/login/");
  }
  const existingUser = await prisma.user.findFirst({
    where: { id: userId },
  });
  // Si el ID no esta en la base de datos
  if (!existingUser) {
    throw redirect("/");
  }
  return userId;
}

// Seguridad - Saber si esta logueado
export async function isLogin(request) {
  const userId = await getUserFromSession(request);
  let isLogin = true;
  // Si no existe ningun ID en localStorage
  if (!userId) {
    isLogin = false;
    return false;
  }
  const existingUser = await prisma.user.findFirst({
    where: { id: userId },
  });
  // Si el ID no esta en la base de datos
  if (!existingUser) {
    isLogin = false;
  }
  return isLogin;
}

// Seguridad - Validando que el usuario sea ADMIN
export async function requireAdminSession(request) {
  const userId = await getUserFromSession(request);
  // Si no existe ningun ID en localStorage
  if (!userId) {
    throw redirect("/accounts/login/?type=admin");
  }
  const existingUser = await prisma.user.findFirst({
    where: { id: userId },
    include: { role: true }
  });
  // Si el ID no esta en la base de datos
  if (!existingUser) {
    throw redirect("/accounts/login/?type=admin");
  }

  // Si no es ADMIN
  if(existingUser?.role?.name !== "ADMIN"){
    throw redirect("/");
  }

  return userId;
}
