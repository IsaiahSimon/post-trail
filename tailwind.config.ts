import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#e71921",
        backgroundColor: "#f7f7f7",
        postLight: "#f4e3db",
        postDarkBlue: "#333366",
        postBlue: "#3573b1",
      },
    },
  },
  plugins: [],
} satisfies Config;
