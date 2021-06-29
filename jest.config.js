module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    // '<rootDir>/components/**/*.vue',
    // '<rootDir>/layouts/*.vue',
    '<rootDir>/pages/marketing/vjhp/*.vue',
    '<rootDir>/pages/marketing/**/_slug/*.vue'
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/utils/matchMedia.js']
}
