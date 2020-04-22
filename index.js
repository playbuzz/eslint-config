const yamlText = require('fs').readFileSync('./.eslintrc.yml');
const yaml = require('js-yaml');

module.exports = yaml.safeLoad(yamlText);
