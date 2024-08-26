'use strict';

/**
 * sow-a-seed service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sow-a-seed.sow-a-seed');
