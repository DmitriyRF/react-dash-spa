const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
  scssResources: require(path.join(process.cwd(), 'src/assets/sass/scss-utils'))
};
