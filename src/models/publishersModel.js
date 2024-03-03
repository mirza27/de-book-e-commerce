const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");
const Admins = require("./adminsModel.js");

const Publishers = db.define(
  "publisher",
  {
    publisher_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    publisher_name: {
      type: DataTypes.STRING,
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

Publishers.belongsTo(Admins, {
  foreignKey: "admin_id",
  targetKey: "admin_id",
});
module.exports = Publishers;
