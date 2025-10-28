const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ymlPath = path.join(__dirname, 'showcase.yml');

module.exports = () => {
  try {
    const raw = fs.readFileSync(ymlPath, 'utf8');
    const data = yaml.load(raw) || {};
    return data;
  } catch (e) {
    console.warn('Failed to load showcase.yml:', e.message);
    return {};
  }
};
