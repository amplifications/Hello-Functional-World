module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',

  transform: {
    "^.+\\.ts$": "ts-jestxxx"
  },

  verbose: true,
  // bail: true,
  roots: ["./src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};