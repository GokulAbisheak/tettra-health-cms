'use strict';

/**
 * compliance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::compliance.compliance');
