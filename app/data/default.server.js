import { prisma } from "./database.server";

export async function dataDefault() {
  // Creando roles por defecto
  const arrayOfRoles = ["USER", "ADMIN"];
  arrayOfRoles?.map(async (role) => {
    const existingRole = await prisma.role.findFirst({
      where: {
        name: role,
      },
    });
    if (!existingRole) {
      await prisma.role.create({
        data: {
          name: role,
        },
      });
    }
  });
}
