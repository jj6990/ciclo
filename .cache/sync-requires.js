const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/blog.js"))),
  "component---src-pages-bloques-de-cambio-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/bloquesDeCambio.js"))),
  "component---src-pages-economia-circular-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/economiaCircular.js"))),
  "component---src-pages-historia-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/historia.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/index.js"))),
  "component---src-pages-principios-js": hot(preferDefault(require("/Users/juanterneus/Desktop/ciclo/src/pages/principios.js")))
}

