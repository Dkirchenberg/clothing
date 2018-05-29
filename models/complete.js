module.exports = function(sequelize, DataTypes) {
    var complete = sequelize.define("complete", {
      top_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bottom_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Customer;
  };