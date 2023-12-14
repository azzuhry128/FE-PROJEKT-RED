const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChatRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatRoom.hasMany(models.UserChat, {
        foreignKey: 'chat_room_id',
        sourceKey: 'chat_room_id',
        as: 'userChat',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      ChatRoom.hasMany(models.Message, {
        foreignKey: 'chat_room_id',
        sourceKey: 'chat_room_id',
        as: 'message',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  ChatRoom.init({
    chat_room_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    is_group_chat: DataTypes.BOOLEAN,
    room_status: DataTypes.ENUM('pending', 'active'),
  }, {
    sequelize,
    modelName: 'ChatRoom',
    tableName: 'chat_rooms',
  });
  return ChatRoom;
};
