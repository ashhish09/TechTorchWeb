<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
>>>>>>> af41c8bc05a88454be791514e8727b222caaeb0b

export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),tailwindcss()],
})
=======
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    postcss: {},
  },
});
>>>>>>> af41c8bc05a88454be791514e8727b222caaeb0b
