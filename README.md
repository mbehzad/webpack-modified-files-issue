# Webpack 5.22.0, `compiler.modifiedFiles` `undefined` in multiCompiler watch build

to reproduce:

- `npm install`
- `npm run watch`
- change the code inside `main.js`
- the `compiler.modifiedFiles` is `undefined` instead a Set with the changed file in the plugin.
