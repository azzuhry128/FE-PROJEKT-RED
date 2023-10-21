const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Account, {
        foreignKey: 'user_id',
        as: 'account',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    profile_name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    bio: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};
