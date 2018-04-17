const weeks = require('./src/data/weeks');

module.exports = {
  site: {
    title: 'Accessibility + Usability',
    description: 'Posts and slides',
    basePath: process.env.NODE_ENV === 'production' ? '/a11y' : '/docs',
    weeks
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './docs'
  }
};
