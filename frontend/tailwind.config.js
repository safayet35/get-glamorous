/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        bangla: ["Anek Bangla", "sans-serif"]
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "emerald",
      "synthwave",
      "valentine",
      "winter"
    ]
  }
};
