const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserChat.belongsTo(models.Account, {
        foreignKey: 'account_id',
        targetKey: 'account_id',
        as: 'account',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      UserChat.belongsTo(models.ChatRoom, {
        foreignKey: 'chat_room_id',
        targetKey: 'chat_room_id',
        as: 'chatRoom',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  UserChat.init({
    chat_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    account_id: DataTypes.UUID,
    chat_room_id: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'UserChat',
    tableName: 'user_chats',
  });
  return UserChat;
};
