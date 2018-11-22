
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    "__PATH_PREFIX__": ""
  },
  setupFiles: ["<rootDir>/tests/loadershim.js"],
  testURL: "http://localhost",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  coverageReporters: [
    "lcov",
    "text",
    "text-summary"
  ]
};
