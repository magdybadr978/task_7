const db = require("../config/db");
const { DataTypes } = require("sequelize");
const User = require("./users_model");
const Post = require("./posts_model");
module.exports = db.define("Posts", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

