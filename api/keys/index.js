/* if (process.env.NODE_ENV == 'production') {
  module.exports = require('./keys.prod')
} else {
  module.exports = require('./keys.dev')
} */
if (1) {
  module.exports = require('./keys.prod')
} else { 
  module.exports = require('./keys.dev')
}
