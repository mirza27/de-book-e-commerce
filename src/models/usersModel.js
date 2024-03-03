const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");

const Users = db.define(
  "users",

  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    Address: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Users;
