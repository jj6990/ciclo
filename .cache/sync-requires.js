const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/Blog.js"))),
  "component---src-pages-bloques-de-cambio-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/BloquesDeCambio.js"))),
  "component---src-pages-economia-circular-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/EconomiaCircular.js"))),
  "component---src-pages-historia-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/Historia.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/index.js"))),
  "component---src-pages-principios-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/Principios.js")))
}

