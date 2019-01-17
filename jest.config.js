// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // All imported modules in your tests should not be mocked automatically
  automock: false,

  // Don't stop running tests after the first failure
  bail: false,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!src/app.js'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An object that configures minimum threshold enforcement
  // for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  // An array of directory names to be searched recursively up from the
  // requiring module's location
  moduleDirectories: ['node_modules', 'src'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // A map from regular expressions to module names that allow to stub out
  // resources with a single module
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy'
  },

  snapshotSerializers: ['enzyme-to-json/serializer'],

  // The path to a module that runs some code to configure or set up the testing
  // framework before each test
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
    '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)':
      '<rootDir>/jest.resolver.js'
  },

  // Indicates whether each individual test should be reported during the run
  verbose: true
};
