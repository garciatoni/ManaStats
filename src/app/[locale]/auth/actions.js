
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Registro de usuario
export const createUser = async (nombre, email, password) => {
    // const hashedPassword = await bcrypt.hash(password, 10);
    // return await prisma.usuario.create({
      // data: { nombre, email, password: hashedPassword },
    // });
  }


