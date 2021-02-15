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
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    // '<rootDir>/components/**/*.vue',
    // '<rootDir>/layouts/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  setupFiles: [
    '<rootDir>/test/utils/matchMedia.js'
  ]
}
