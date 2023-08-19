module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv : ['<rootDir>/jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './babel.config.testing.js' }]
  }
}
