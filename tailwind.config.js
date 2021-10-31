module.exports = {
  mode: "jit",
  purge: { content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], options: { safelist: [/data-theme$/] } },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
