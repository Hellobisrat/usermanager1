const {Model,DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model{}

User.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true,

    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    phone:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    }
  }
  ,
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;


