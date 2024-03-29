// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "dist-tests/test-results/jest",
        outputName: "jest.xml",
        includeShortConsoleOutput: true,
        classNameTemplate: "{classname}-{title}",
        titleTemplate: "{classname}-{title}",
      },
    ],
  ],
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  resetMocks: true,
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "jestGlobalMocks.ts",
    ".module.ts",
    ".mock.ts",
    "reportWebVitals.ts",
    "<rootDir>/src/app/hooks.ts",
    "<rootDir>/src/app/store.ts",
    "<rootDir>/src/App.tsx",
    "<rootDir>/src/index.tsx",
    "<rootDir>/src/features/counter/*",
  ],
};

module.exports = config;

// Or async function
module.exports = async () => {
  return config;
};
