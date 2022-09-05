// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    './src/api/**',
    './src/utils/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './src/utils/logger',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  testEnvironment: 'node',
};
