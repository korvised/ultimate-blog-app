/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  arrowParens: "avoid",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
}

module.exports = config
