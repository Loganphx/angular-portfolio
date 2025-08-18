
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://loganphx.github.io/angular-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/about-me"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/services"
  },
  {
    "renderMode": 2,
    "route": "/angular-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-portfolio",
    "route": "/angular-portfolio/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11532, hash: '48d7250fbcd6129f70234756edfc2a153cd8cfefd900cb4edb8218edabe3195b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: 'ca4cf94cac88a122dafeafebcae3af2d6ae6285850762a3a5f67a486cee6535d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24116, hash: '455f02bef1210886dca06bb693665f34e8eb9b1b0b3878d90fc30a99504416f5', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 23411, hash: 'd6807e7e59e64a9e51e0f97822c268160fbe69144d8c11ddbe76ac9f1eba5cab', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 23292, hash: 'c0d93aa5f4e157e584b3135ce19eb5908ac11cff78a80cd4f8fc4a259569b114', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 36322, hash: 'e35796884f0706969307f3312204d767f27192268ceda10e7eb86ab7a1932c69', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 23610, hash: '7da4731aa8829c8b6f6ee8b664049279a020a8560e8b1bf2620010fc0bb4a2b4', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-OCAGKHTC.css': {size: 15503, hash: 'engS5ucgRNw', text: () => import('./assets-chunks/styles-OCAGKHTC_css.mjs').then(m => m.default)}
  },
};
