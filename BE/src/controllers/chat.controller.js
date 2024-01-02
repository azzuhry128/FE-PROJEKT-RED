const {
  validateGroupChatInfo, validateGetGroupChat, validateCreateChatRoom, validateUpdateChatRoom,
} = require('../validations/chatRoom.validation');
const { /* validateUserChatInfo, */ validateGetUserChat, validateCreateUserChat } = require('../validations/userChat.validation');
const {
  getChatRoom, storeChatRoom, updateChatRoom, destroyChatRoom,
} = require('../services/chatRoom.service');
const {
  getAllUserChat, getUserChat, storeUserChat, destroyUserChat,
} = require('../services/userChat.service');
// const {
//   getAccountByAccountId,
// } = require('../services/account.service');

exports.fetchAllChat = async (req, res) => {
  try {
    const { accountId } = req;

    const userChatData = await getAllUserChat('account_id', accountId);

    await validateGetUserChat(userChatData);

    let chatData = await Promise.all(userChatData.map(async (userChat) => {
      const chat = await getAllUserChat('chat_room_id', userChat.chat_room_id);

      return chat;
    }));

    chatData = chatData.flat();
    chatData = chatData.filter((chat) => chat.chatRoom.room_status === 'active');

    chatData = await Promise.all(chatData.map(async (chat) => {
      if (chat.account_id === accountId
        && chat.chatRoom.is_group_chat === true) {
        return chat.chatRoom;
      }

      if (chat.account_id !== accountId
        && chat.chatRoom.is_group_chat === true) {
        return null;
      }

      if (chat.account_id === accountId
        && chat.chatRoom.is_group_chat === false) {
        return null;
      }

      // if (chat.account_id !== accountId
      //   && chat.chatRoom.is_group_chat === false) {
      //   return chat.account;
      // }

      return chat;
    }));

    chatData = chatData.filter((chat) => chat !== null);

    return res.json({
      success: true,
      code: 200,
      message: 'Sukses mendapatkan semua chat',
      data: chatData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.createGroupChat = async (req, res) => {
  try {
    const { accountId } = req;
    const chatGroupData = req.body;
    chatGroupData.accountIds.splice(0, 0, accountId);

    await validateGroupChatInfo(req);

    const chatRoomData = await validateCreateChatRoom(chatGroupData);

    await storeChatRoom(chatRoomData);

    const userChatData = await Promise.all(chatGroupData.accountIds.map(async (account) => {
      const userChat = await validateCreateUserChat(
        chatRoomData.chat_room_id,
        account,
      );

      return userChat;
    }));

    userChatData.map(async (userChat) => {
      await storeUserChat(userChat);
    });

    return res.json({
      success: true,
      code: 200,
      message: 'Sukses Membuat Group Chat',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.updateGroupChat = async (req, res) => {
  try {
    const { groupChatId } = req.params;
    const inputChatRoomData = req.body;

    const chatRoomData = await getChatRoom('chat_room_id', groupChatId);

    await validateGetGroupChat(chatRoomData);

    const updatedChatRoomData = await validateUpdateChatRoom(chatRoomData, inputChatRoomData);

    await updateChatRoom(chatRoomData, updatedChatRoomData);

    return res.json({
      success: true,
      code: 200,
      message: 'Sukses Update Grup Chat',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.deleteGroupChat = async (req, res) => {
  try {
    const { groupChatId } = req.params;

    const chatRoomData = await getChatRoom('chat_room_id', groupChatId);

    await validateGetGroupChat(chatRoomData);

    await destroyChatRoom(chatRoomData);

    return res.json({
      success: true,
      code: 200,
      message: 'Sukses hapus grup chat',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.addFriendChat = async (req, res) => {
  try {
    const { accountId } = req;
    const chatData = req.body;
    const accountIds = [];

    accountIds.push(accountId, chatData.requestUser);

    const chatRoomData = await validateCreateChatRoom(chatData);

    await storeChatRoom(chatRoomData);

    const userChatData = await Promise.all(accountIds.map(async (account) => {
      const userChat = await validateCreateUserChat(
        chatRoomData.chat_room_id,
        account,
      );

      return userChat;
    }));

    userChatData.map(async (userChat) => {
      await storeUserChat(userChat);
    });

    return res.json({
      success: true,
      code: 200,
      message: 'Create Chat Success',
      chatRoomId: chatRoomData.chat_room_id,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.acceptFriendChat = async (req, res) => {
  try {
    // const { accountId } = req;
    const { chatRoomId } = req.params;

    const chatRoomData = await getChatRoom('chat_room_id', chatRoomId);

    await validateGetGroupChat(chatRoomData);

    // const userChatData = await getUserChat(chatRoomId, accountId);

    // await validateGetUserChat(userChatData);

    const updatedChatRoomData = await validateUpdateChatRoom(
      chatRoomData,
      { room_status: 'active' },
    );

    await updateChatRoom(chatRoomData, updatedChatRoomData);

    return res.json({
      success: true,
      code: 200,
      message: 'Sukses menerima permintaan pertemanan',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.joinGroupChat = async (req, res) => {
  try {
    const { groupChatId } = req.params;
    const { accountId } = req;

    const chatRoomData = await getChatRoom('chat_room_id', groupChatId);

    await validateGetGroupChat(chatRoomData);

    const userChatData = await validateCreateUserChat(
      groupChatId,
      accountId,
    );

    await storeUserChat(userChatData);

    return res.json({
      success: true,
      code: 200,
      message: `Anda berhasil join grup ${chatRoomData.name}`,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.leaveGroupChat = async (req, res) => {
  try {
    const { groupChatId } = req.params;
    const { accountId } = req;

    const chatRoomData = await getChatRoom('chat_room_id', groupChatId);

    await validateGetGroupChat(chatRoomData);

    const userChatData = await getUserChat(groupChatId, accountId);

    await validateGetUserChat(userChatData);

    await destroyUserChat(userChatData);

    return res.json({
      success: true,
      code: 200,
      message: 'Anda telah meninggalkan grup',
    });
  } catch (error) {
    return res.json(error);
  }
};
