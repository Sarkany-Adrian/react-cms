/**
 * Helper function for Jest transform option
 *
 * https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string
 */

const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
