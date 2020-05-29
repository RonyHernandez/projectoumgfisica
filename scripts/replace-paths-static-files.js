const replace = require('replace-in-file');

const options = { files: 'src/static/css/*.css', from: /\.\.\/img\//g, to: '/public/img/' };
try {
  const results = replace.sync(options);
  console.log('Replacement hardcoded paths:', results);
} catch (error) {
  console.error('Error occurred:', error);
}
