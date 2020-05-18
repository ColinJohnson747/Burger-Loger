const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("Burgers", function (res) {
      cb(res);
    });
  },

  createOne: function (cols, vals, cb) {
    orm.createOne("Burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("Burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("Burgers", condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
