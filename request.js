var defaultConfig = require('./defaultConf')
var merge = require('./util/merge')

function Request(config) {
  // console.log('this', this)
  // var defaults = merge(defaultConfig, config)
  // console.log('config', defaults)
  this.defaults = merge(defaultConfig, config)
}

Request.prototype.request = function(config) {
  
  var config = merge({}, this.defaults, config)

  config = config.before(config)
  
  return new Promise(function(resolve, reject){
    // console.log('this',this)
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
}

module.exports = Request