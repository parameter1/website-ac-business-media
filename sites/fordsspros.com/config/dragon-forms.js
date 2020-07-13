const DragonFormsConfig = require('@ac-business-media/refresh-theme/dragon-forms/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://acbusiness.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'DSS_NL_signup' });

module.exports = config;
