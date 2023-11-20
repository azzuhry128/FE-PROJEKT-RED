/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chat_rooms', {
      chatRoomId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      isGroupChat: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface /* Sequelize */) {
    await queryInterface.dropTable('chat_rooms');
  },
};
