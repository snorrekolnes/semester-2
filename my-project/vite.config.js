const { resolve } = require('path');



export default {

  root: resolve(__dirname, 'src'),

  build: {


    rollupOptions: {

      input: {

        main: resolve(__dirname, 'src/index.html'),

        profile: resolve(__dirname, 'src/profile.html'),

        signup: resolve(__dirname, 'src/signup.html'),

        specific: resolve(__dirname, 'src/specific.html'),
        create: resolve(__dirname, 'src/create.html'),
        edit: resolve(__dirname, 'src/edit-image.html'),
        homepage: resolve(__dirname, 'src/homepage.html'),



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