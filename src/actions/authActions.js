"use server";

import { registerUserSchema, signInSchema } from "../validations/validations"; // Ajusta la ruta según tu estructura

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { cookies } from "next/headers"; // Para manejar cookies HTTP-Only
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET || "secreto_super_seguro"; // 🔐 Define en .env

// REGISTER
export const registerUser = async (formData) => {
  try {

    const validatedData = registerUserSchema.safeParse(formData);
    if (!validatedData.success) {
      console.log(validatedData.error.flatten());
      return {
        error: "errors.validationError",
        details: validatedData.error.flatten(),
        status: "error",
      };
    }
    
    const { username, email, password, password2 } = validatedData.data;

    
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });

    if (existingUser) {
      const conflictType = existingUser.email === email ? "email" : "username";
      return {
        error: "errors.validationError",
        details: {
          fieldErrors: {
            [conflictType]: [`errors.userExists${conflictType}`],
          },
        },
        status: "error",
      };
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });


    const token = jwt.sign({ 
      userid: newUser.id, 
      useremail: newUser.email,
      username: newUser.username,
      createdAt: newUser.createdAt
    }, SECRET_KEY, 
    { expiresIn: "7d" });

    cookies().set("token", token, { httpOnly: true, secure: true, path: "/" });

    // return { status: "success", message: "auth.userCreated", user: newUser };
    
    return { 
      status: "success", 
      message: "auth.userCreated", 
      user:{
        userid: newUser.id, 
        useremail: newUser.email,
        username: newUser.username,
        createdAt: newUser.createdAt,
        token
      }
    };
    
  } catch (error) {
    console.error("Error en registerUser:", error);
    return { error, status: "error", };
  }

};

// LOGIN
export const signIn = async (formData) => {
  try {

    const validatedData = signInSchema.safeParse(formData);
    
    if (!validatedData.success) {
      return {
        error: "errors.validationError",
        details: validatedData.error.flatten(),
        status: "error",
      };
    }

    const { email, password } = validatedData.data;

    // Verifica si el usuario existe
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return {
        error: "errors.validationError",
        details: {
          fieldErrors: {
            email: ["errors.userNotFound"],
          },
        },
        status: "error",
      };
    }



    // Verifica si la contraseña es correcta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return {
        error: "errors.validationError",
        details: {
          fieldErrors: {
            password: ["errors.incorrectPassword"], // Error específico para la contraseña
          },
        },
        status: "error",
      };
    }

    const token = jwt.sign({ 
      userd: user.id, 
      useremail: user.email,
      username: user.username,
      createdAt: user.createdAt
    }, SECRET_KEY, 
    { expiresIn: "7d" });

    cookies().set("token", token, { httpOnly: true, secure: true, path: "/" });

    return { 
      status: "success", 
      message: "auth.loginSuccess", 
      user:{
        userd: user.id, 
        useremail: user.email,
        username: user.username,
        createdAt: user.createdAt,
        token
      }
    };
    
  } catch (error) {
    console.error("Error en signIn:", error);
    return {
      error,
      details: {
        fieldErrors: {
          root: ["errors.internalServerError"], // Error general
        },
      },
      status: "error",
    };
  }
};


export const checkAuth = async () => {
  const token = await cookies().get("token")?.value;
  if (!token) return Response.json({ user: null }, { status: 401 });

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  
    
    return JSON.parse(JSON.stringify(decoded));
    
  } catch (error) {
    return Response.json({ user: null }, { status: 401 });
  }

  return token || null; // Devuelve el token o null si no existe
};



// ✅ LOGOUT (Borra la cookie)
export const logoutUser = async () => {
  cookies().set("token", "", { expires: new Date(0) });
  return { message: "Logout exitoso" };
};
