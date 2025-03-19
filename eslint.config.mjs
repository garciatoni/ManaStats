import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
// import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import react from "eslint-plugin-react";

const compat = new FlatCompat();

export default [
  js.configs.recommended, // Reglas recomendadas de JS
  react.configs.recommended, // Reglas recomendadas de React
  ...compat.extends("next/core-web-vitals"), // Reglas optimizadas para Next.js
  // prettierConfig, // Desactiva reglas que chocan con Prettier
  {
    // plugins: { prettier },
    rules: {
      "prettier/prettier": "error", // Forzar reglas de Prettier
      "react/react-in-jsx-scope": "off", // Next.js no necesita importar React
      "no-unused-vars": "warn", // Advertencia para variables sin usar
      "no-console": "warn", // Advertencia para console.log
      "semi": ["error", "always"], // Exigir punto y coma
      "quotes": ["error", "double"], // Usar comillas dobles
      "indent": ["error", 2], // Indentación de 2 espacios
      "comma-dangle": ["error", "never"] // Sin coma final en objetos/arrays
    }
  }
];
