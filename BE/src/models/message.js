const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.belongsTo(models.ChatRoom, {
        foreignKey: 'chat_room_id',
        targetKey: 'chat_room_id',
        as: 'chatRoom',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Message.belongsTo(models.Account, {
        foreignKey: 'account_id',
        targetKey: 'account_id',
        as: 'account',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Message.init({
    message_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    chat_room_id: DataTypes.UUID,
    account_id: DataTypes.UUID,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'messages',
  });
  return Message;
};
