'use strict';

/**
 * contact-form router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-form.contact-form', {
  config: {
    find: {
      middlwares: 
        // pass a middleware implementation directly
       [ "test"]
    }
  }
});
