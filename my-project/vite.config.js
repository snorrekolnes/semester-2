const { resolve } = require('path');



export default {

  root: resolve(__dirname, 'src'),

  build: {

    rollupOptions: {

      input: {

        main: resolve(__dirname, 'src/index.html'),

        profile: resolve(__dirname, 'src/profile.html'),

        login: resolve(__dirname, 'src/login.html'),

      },

    },

    outDir: '../dist',

  },

  resolve: {

    alias: {},

  },

  server: {

    port: 8080,

    hot: true,

  },

};