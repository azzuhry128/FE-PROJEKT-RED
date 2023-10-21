const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'user_id',
        as: 'user',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Account.init({
    account_id: DataTypes.UUID,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    online: DataTypes.BOOLEAN,
    user_id: DataTypes.UUID,
    access_token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
  });
  return Account;
};
