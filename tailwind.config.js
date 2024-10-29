/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        blue: "#64C0FF",
        peach: "#FF6F61",
        creme: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
