// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr.join(',') + ']';
  } else if (typeof obj === 'object') {
    var objArr = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      objArr.push('"' + key + '":' + stringifyJSON(obj[key]));
    }
    if (objArr.length === 0 ) {
      return '{}';
    } else {
      return '{' + objArr.join(',') + '}';
    }

  } else {
    return '' + obj;
  }
// hi
};
