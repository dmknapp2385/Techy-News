const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model{}

Comment.init(
    {
      // define an id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      comment_text: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references:{
              model: 'user',
              key: 'id'
          }
      },
      post_id: {
          type: DataTypes.INTEGER,
          references: {
              model:'post',
              key: 'id'
          }
      }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
  );

module.exports = Comment;