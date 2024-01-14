const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.ChatRoom, {
        foreignKey: 'chat_room_id',
        targetKey: 'chat_room_id',
        as: 'notification_chat_room',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Notification.belongsTo(models.Account, {
        foreignKey: 'sender',
        targetKey: 'account_id',
        as: 'notification_sender',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Notification.belongsTo(models.Account, {
        foreignKey: 'receiver',
        targetKey: 'account_id',
        as: 'notification_receiver',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Notification.init({
    notification_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    chat_room_id: DataTypes.UUID,
    sender: DataTypes.UUID,
    receiver: DataTypes.UUID,
    message: DataTypes.TEXT,
    is_read: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Notification',
    tableName: 'notifications',
  });
  return Notification;
};
