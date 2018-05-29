module.exports = function(sequelize, DataTypes) {
  var Clothes = sequelize.define("Clothes", {
    part: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.URL,
      allowNull: false
    },
    classMethods: {
      associate: function(models) {
        Clothes.hasOne(models.Complete);
      }
    }
  });
 return Clothes;
};

  