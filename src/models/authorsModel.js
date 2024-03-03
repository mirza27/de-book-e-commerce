const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db.js");
const Admins = require("./adminsModel.js");

const Authors = db.define(
  "authors",
  {
    author_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_birth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
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

Authors.belongsTo(Admins, {
  foreignKey: "admin_id",
  targetKey: "admin_id",
});

module.exports = Authors;
