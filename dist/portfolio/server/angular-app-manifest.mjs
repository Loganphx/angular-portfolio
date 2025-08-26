
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11525, hash: '36a7ec845d779a040c58e6d459435d243edf5419f9486f029b22b4a6237a0cce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'd2141c6c36519fe376027e11d3f3ffd52b20e9cc9262bab5d4664fad33ef5871', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36178, hash: '101e9e063411faea676d220536f594d93c969f8dce5c44ebc5a964604bf378ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UH7O4TKD.css': {size: 15540, hash: 'gvE0ZwAX5k4', text: () => import('./assets-chunks/styles-UH7O4TKD_css.mjs').then(m => m.default)}
  },
};
