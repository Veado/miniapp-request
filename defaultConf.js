
var defaultContentType = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

var defaultConfig  = {
  header: defaultContentType,
  baseUrl: '',
  timeout: null,
  before: function(config) {return config}
}

module.exports = defaultConfig