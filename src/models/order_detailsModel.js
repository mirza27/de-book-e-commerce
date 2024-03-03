const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");
const Books = require("./booksModel.js");

const OrderDetails = db.define(
  "order_details",

  {
    order_detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

OrderDetails.belongsTo(Books, {
  foreignKey: "book_id",
  targetKey: "book_id",
});

module.exports = OrderDetails;
