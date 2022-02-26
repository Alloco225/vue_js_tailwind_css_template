module.exports = {
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
            gridTemplateRows: {
                // Simple 8 row grid
                8: "repeat(8, minmax(0, 1fr))",
            },

            letterSpacing: {
                tightest: "-.075em",
                tightestest: "-.095em",
            },
            spacing: {
                100: "30rem",
                102: "32rem",
                104: "34rem",
                105: "35rem",
                106: "36rem",
                107: "37rem",
                108: "38rem",
                109: "39rem",
                110: "40rem",
                111: "41rem",
                112: "42rem",
                114: "44rem",
                116: "46rem",
                118: "48rem",
                120: "50rem",
            },
            zIndex: {
                '-5': -5,
            },
        },
  },
  plugins: [],
}
