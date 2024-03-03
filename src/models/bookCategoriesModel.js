const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");

const BookCategories = db.define(
  "book_categories",
  {
    book_category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = BookCategories;
