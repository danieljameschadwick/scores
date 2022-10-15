module.exports = {
  preset: "react-native",
  rootDir: "./",
  modulePaths: ["<rootDir>"],
  moduleDirectory: ["node_modules", "components", "state"],
  testMatch: [
    "**/**.spec.(ts|tsx)",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@react-native|react-native)).*/"
  ],
  moduleNameMapper: {
    "@scores/ui/(.*)$": "<rootDir>/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  coverageDirectory: ".jest-coverage",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["./test/jest.setup.js"],
};
