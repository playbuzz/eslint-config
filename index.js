const yamlText = require('fs').readFileSync(`${__dirname}/.eslintrc.yaml`); //eslint-disable-line no-sync
const yaml = require('js-yaml');

module.exports = yaml.safeLoad(yamlText);
