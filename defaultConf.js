
var defaultContentType = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

var defaultConfig  = {
  header: defaultContentType,
  baseUrl: '',
  timeout: null,
  before: function(config) {return new Promise(function(resolve){
    resolve(config)
  })},
  interceptor: function(res) {
    return res 
  }
}

module.exports = defaultConfig