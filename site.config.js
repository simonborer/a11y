const projects = require('./src/data/projects');

module.exports = {
  site: {
    title: 'Accessibility & Usability',
    description: 'Posts and slides',
    basePath: process.env.NODE_ENV === 'production' ? '/a11y' : '/docs',
    projects
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './docs'
  }
};
