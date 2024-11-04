import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#339af0",
        secondary: "#228be6",
        textPrimary: "#868e96",
        textSecondary: "#adb5bd",
      },
      boxShadow: {
        primaryshadow: " 0px 4px 35px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },

  plugins: [forms],
};
