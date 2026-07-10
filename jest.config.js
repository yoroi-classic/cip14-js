module.exports = {
  transform: {
    "^.+\\.ts?$": ["ts-jest", { tsconfig: "tsconfig.typecheck.json" }],
  },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
