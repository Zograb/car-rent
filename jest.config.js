module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv : ['<rootDir>/jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './babel.config.testing.js' }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileTransformer.js'
  },
  moduleNameMapper: {
    "^@/(.+)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ['node_modules'],
}
