'use strict';

/**
 * test-rich-text service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-rich-text.test-rich-text');
