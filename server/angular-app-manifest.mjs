
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-portfolio",
    "route": "/angular-portfolio/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11534, hash: 'fb8ede74aeca3f6ccfa31db44d3fc2f9f02be954e6c027a02a4b3fdd0375ce08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'a51d6700cb939100e226bb2f13b87796151ef7bb09c88e78560e472d22f14168', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36204, hash: '69677589c7597c4d6b01a77b4eb033d6e3f620f7ca40dcf519a6c4dcb442cbe4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FX5M6IIE.css': {size: 15531, hash: '66mIG05Mmc8', text: () => import('./assets-chunks/styles-FX5M6IIE_css.mjs').then(m => m.default)}
  },
};
