var obj = {};

var get = function(key) {
  return obj[key];
};

var set = function(key, value) {
  obj[key] = value;
};

export { get, set };
