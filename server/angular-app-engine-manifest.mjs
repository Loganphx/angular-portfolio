
export default {
  basePath: 'https://loganphx.github.io/angular-portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
