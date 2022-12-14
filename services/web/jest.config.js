module.exports = {
  preset: "react-native",
  rootDir: ".",
  modulePaths: ["<rootDir>"],
  moduleDirectory: ["/node_modules", "/src"],
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
    "@src/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.js",
  },
  coverageDirectory: ".jest-coverage",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["./test/jest.setup.js"],
};
