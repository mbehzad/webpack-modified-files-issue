class SomePlugin {
  constructor() {
    this.firstRun = true;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("SomePlugin", (compilation) => {

      if (!this.firstRun)
        // is `undefined` in multiCompiler build
        console.log(
          "\n======================\ncompiler.modifiedFiles:",
          typeof compiler.modifiedFiles,
          "\n======================\n"
        );

      this.firstRun = false;
    });
  }
}

module.exports = [
  {
    entry: {
      A: "./main.js",
    },
    mode: "development",
    plugins: [new SomePlugin()],
  },
  {
    entry: {
      B: "./main.js",
    },
    mode: "development",
  },
];
