const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
    {
      // define an id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          //maybe create a max length
      },
      content: {
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
      }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
  );

module.exports = Post;