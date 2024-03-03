const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");
const OrderDetails = require("./order_detailsModel.js");
const Users = require("./usersModel.js");

const Orders = db.define(
  "orders",
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_detail_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Orders.hasMany(OrderDetails, {
  foreignKey: "order_detail_id",
  sourceKey: "order_detail_id",
});

Orders.belongsTo(Users, {
  foreignKey: "user_id",
  sourceKey: "user_id",
});

module.exports = Orders;
