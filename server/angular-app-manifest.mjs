
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
    'index.csr.html': {size: 11516, hash: '45d177009675524b501e735423d45629dabb8817e326f5a159fd4f85b980d312', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '0a66a68baa2a2a1f041ba5f9adbd638fec6b9503c3afaa5234a6def1cb055384', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36168, hash: '916b3d0b3b7d57cbb78eb2cfb62be207232d788a6504e0ed825c1d8ec66a027c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FX5M6IIE.css': {size: 15531, hash: '66mIG05Mmc8', text: () => import('./assets-chunks/styles-FX5M6IIE_css.mjs').then(m => m.default)}
  },
};
