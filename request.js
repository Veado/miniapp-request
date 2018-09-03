var defaultConfig = require('./defaultConf')
var merge = require('./util/merge')

function Request(config) {
  this.defaults = merge(defaultConfig, config)
}

Request.prototype.request = function(config) {
  
  return new Promise(function(resolve, reject){
    var config = merge({}, this.defaults, config)

    config.before(config).then(function(config){
      wx.request({
        url: config.baseUrl + config.url, //仅为示例，并非真实的接口地址
        data: config.data,
        header: config.header,
        success: function(res) {
          resolve(res)
        },
        fail: function(e) {
          reject(e)
        }
      })
    }.bind(this))
  }.bind(this))
}

module.exports = Request