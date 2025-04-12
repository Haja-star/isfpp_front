import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Détecte automatiquement la version de React
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Désactive la règle qui exige l'import de React
      "no-console": "warn", // Affiche un avertissement si `console.log` est utilisé
      "no-unused-vars": "warn", // Affiche un avertissement pour les variables non utilisées
    },
  },
];