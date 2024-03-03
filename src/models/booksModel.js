const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");
const Authors = require("./authorsModel.js");
const Publishers = require("./publishersModel.js");
const BookCategories = require("./bookCategoriesModel.js");

const Books = db.define(
  "books",
  {
    book_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
    },
    author_id: {
      type: DataTypes.INTEGER,
    },
    publisher_id: {
      type: DataTypes.INTEGER,
    },
    year_release: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    book_category_id: {
      type: DataTypes.INTEGER,
    },
    admin_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Books.belongsTo(Authors, {
  foreignKey: "author_id",
  targetKey: "author_id",
});

Books.belongsTo(Publishers, {
  foreignKey: "publisher_id",
  targetKey: "publisher_id",
});

Books.belongsTo(BookCategories, {
  foreignKey: "book_category_id",
  targetKey: "book_category_id",
});

Books.belongsTo(Admins, {
  foreignKey: "admin_id",
  targetKey: "admin_id",
});

module.exports = Books;
