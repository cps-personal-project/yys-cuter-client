// module.exports = {
//   ...require("./packages/renderer/tailwind.config.js"),
// };

module.exports = {
  content: ["./packages/renderer/index.html", "./packages/renderer/src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "50%": "50%",
      },
      backgroundColor: {
        "black-50": "rgb(49,48,45)",
      },
    },
  },
  plugins: [],
};
