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
        url: config.baseUrl + config.url, 
        data: config.data,
        header: config.header,
        success: function(res) {
          //调用拦截器 
          var result = config.interceptor(res)
          //处理promise或者同步的函数情况
          if(Object.prototype.toString.call(result) === "[object Promise]") {
            result.then(promiseRes=>{
              resolve(promiseRes)
            })
          }else {
            resolve(result)
          }
          
        },
        fail: function(e) {
          reject(e)
        }
      })
    }.bind(this))
  }.bind(this))
}

module.exports = Request