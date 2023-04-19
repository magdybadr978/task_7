const db = require("../config/db");
const { DataTypes } = require("sequelize");
const Post = require("./posts_model");
const User = require("./users_model");
module.exports = db.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255],
    },
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  Role: {
    type: DataTypes.ENUM("basic", "premimum", "admin"),
    allowNull: false,
    defaultValue: "basic",
  },
});

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });
