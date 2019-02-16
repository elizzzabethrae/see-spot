'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    lost: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    found: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    animal:{
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reunited: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
