
//浅拷贝
var merge = function() {
  var target = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      target[key] = arguments[i][key] 
    }
  }

  return arguments[0];
};

module.exports = merge
