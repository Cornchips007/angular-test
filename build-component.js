const fs = require('fs-extra'); //Cannot use import statement outside a module
const concat = require('concat');

build = async () => {
  const files = [
    './dist/my-project/runtime.js',
    './dist/my-project/polyfills.js',
    // './dist/my-project/es2015-polyfills.js',
    // './dist/my-project/scripts.js',
    './dist/my-project/main.js'
  ];

  await fs.ensureDir('widget');
  await concat(files, 'widget/dist/web-comp.js');
}
build();