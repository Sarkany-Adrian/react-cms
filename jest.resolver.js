// @flow

/**
 * Helper function for Jest transform option
 *
 * https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string
 */

const path = require('path');

module.exports = {
  process(src: string, filename: string) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
