module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          "login-bg": "linear-gradient(to bottom, rgba(242, 115, 112, 0.5), rgba(52, 107, 183, 0.5)), url('./assets/bg-login.png')",
        }
      },
      colors: {
        darkred: '#914543',
        linearblue: '#F27370',
        linearorange: '#346BB7',
        baseorange: '#F27370',
      }
    },
    plugins: [],
  }