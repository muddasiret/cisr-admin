"use strict";

/**
 *  contact-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact-form.contact-form", {
  config: {
    find: {
      middlwares:
        // pass a middleware implementation directly
        (ctx, next) => {
          console.log("muduuuuuuuuuuuuu")
          return next();
        },
    },
  },
});
