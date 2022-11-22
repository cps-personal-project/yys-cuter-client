// 当前文件可能存在不生效问题

module.exports = {
  content: [`${__dirname}/index.html`, `${__dirname}/src/**/*.{vue,js,ts,jsx,tsx}`],
  theme: {
    extend: {
      borderRadius: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
