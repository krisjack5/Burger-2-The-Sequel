var ORM = require ('../config/orm.js');

var burgers = {
  all: function(cb) {
    ORM.all("burger", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    ORM.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    ORM.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    ORM.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burgers;