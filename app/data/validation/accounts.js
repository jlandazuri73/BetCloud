import { calculateDaysDifference } from "../../utils/date";

// Validar email
export function isValidEmail(email) {
  var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email && patron.test(email);
}

// Validar contraseña
function isValidPassword(password) {
  return password && password?.length >= 6;
}

// Validar PLAN
function isValidPlan(plan) {
  return plan == "FREE" || plan == "VIP";
}

// Validar nombre
function isValidName(name) {
  let sms = "";
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  // No se ingreso ningun caracter
  if (!name) {
    sms = "El nombre debe tener al menos un caracter";
  }
  // No ingreso solo letras
  if (!regex?.test(name)) {
    sms = "El nombre debe tener solo letras";
  }
  // Es muy corto
  if (name?.length < 3) {
    sms = "El nombre debe tener al menos 3 caracteres";
  }
  return {
    ok: name && name?.length >= 3 && sms === "",
    sms,
  };
}

// Validando datos del registro
export function validateRegister(input) {
  let validationErrors = {};
  let successName = isValidName(input?.name);
  if (!isValidEmail(input?.email)) {
    validationErrors.email = "El correo no es valido";
  }
  if (!isValidPassword(input?.password)) {
    validationErrors.password =
      "La contraseña debe tener al menos 6 caracteres";
  }
  if (!isValidPlan(input?.plan)) {
    validationErrors.plan =
      "El plan no es valido";
  }
  if (!successName?.ok) {
    validationErrors.name = successName?.sms;
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}

// Validando datos del login
export function validateLogin(input) {
  let validationErrors = {};
  if (!input?.userName) {
    validationErrors.email = "El correo o usuario no es valido";
  }
  if (!isValidPassword(input?.password)) {
    validationErrors.password =
      "La contraseña debe tener al menos 6 caracteres";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}

// Validar datos del perfil
export function validateProfile(input) {
  let validationErrors = {};
  let successName = isValidName(input?.name);
  if (!isValidEmail(input?.email)) {
    validationErrors.email = "El correo no es valido";
  }
  if (!successName?.ok) {
    validationErrors.name = successName?.sms;
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}

// Validar si esta apto para ser VIP
export function isValidVIP(user) {
  let response = { ok: true, sms: "" };
  if (user?.isVIP) {
    // Se registró como VIP pero no ha pagado
    if (!user?.payCompleted) response = { ok: false, sms: "PAY" };
    // Es VIP pero ya se venció el mes de la suscripción
    if (user?.payCompleted) {
      const days = calculateDaysDifference(user?.datePayment) || null;
      if (days > 30) response = { ok: false, sms: "EXPIRED" }
    }
  }
  return response;
}