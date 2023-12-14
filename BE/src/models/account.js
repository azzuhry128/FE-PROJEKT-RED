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

      Account.hasMany(models.UserChat, {
        foreignKey: 'account_id',
        sourceKey: 'account_id',
        as: 'userChat',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Account.hasMany(models.Message, {
        foreignKey: 'account_id',
        sourceKey: 'account_id',
        as: 'message',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Account.hasMany(models.Notification, {
        foreignKey: 'sender',
        sourceKey: 'account_id',
        as: 'notification_sender',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Account.hasMany(models.Notification, {
        foreignKey: 'receiver',
        sourceKey: 'account_id',
        as: 'notification_receiver',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Account.init({
    account_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
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
