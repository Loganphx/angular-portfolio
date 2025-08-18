
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
    'index.csr.html': {size: 11516, hash: '9d0e6de8912114c02f4176a924eca6c1006d67ddcb1a1e6600274f33659bbaea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '5b4939171f07ca0e7d8b9e5b1a5a2b95a4d4fe641d325e04a137fed69ca5a79f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35581, hash: 'f3bb0e01f18673ade2effdb4cb449b12f83c7a4bc0e2bf8f672af4a273b3dd55', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FX5M6IIE.css': {size: 15531, hash: '66mIG05Mmc8', text: () => import('./assets-chunks/styles-FX5M6IIE_css.mjs').then(m => m.default)}
  },
};
