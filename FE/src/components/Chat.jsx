import { Box, Text, Avatar, Button, Input, Spinner } from "@chakra-ui/react";
// import { MessageAdapter } from "../adapters/messageAdapter"
import {
  renderMessageCommand,
  useAccountStore,
  useContactStore,
  useMessageStore,
  useSelectedContactStore,
  useTokenStore,
  useSocketStore,
} from "../state/store";
import "boxicons";
import { refinedUser } from "../data/fakeData";
import io from "socket.io-client";
import axios from "axios";
import { useEffect } from "react";
import { AnotherMessageComponent } from "./AnotherMessageComponent";
import { MessageComponent } from "./MessageComponent";
// import { key } from "localforage"
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Chat() {
  const socket = io.connect(
    `http://localhost:3000/`,
    { transports: [ "flashsocket","polling","websocket" ], reconnect: true },
    "echo-protocol"
  );
  const { socketState } = useSocketStore();
  let { messageState, setMessageState } = useMessageStore();
  const { roomState } = useContactStore();
  const { selectedContactIDState } = useSelectedContactStore();
  const { id } = useAccountStore();
  const { tokenState } = useTokenStore();
  const {
    selectedContactNameState,
    selectedContactTagState,
    displayProfilePictureState,
    displayMessageBarState,
  } = useSelectedContactStore();
  const { renderMessageState } = renderMessageCommand();
  const currentUserId = useAccountStore((state) => state.id);
  const currentRoom = useContactStore((state) => state.roomState);
  const [dataMessage, setDataMessage] = useState([]);
  let { room } = useParams();
  const [randomID, setRandomID] = useState(Math.random());
  const [loading, setLoading] = useState(false);

  console.log(dataMessage)

  document.addEventListener("DOMContentLoaded", () => {
    console.log("page is loaded");
    const button = document.getElementById("messageInput");
    button.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        console.log(event.key);
      }
    });
  });

  async function getMessages() {
    const messageData = await axios.get(
      `http://localhost:3000/api/message/${room}`,
      {
        headers: { Authorization: `Bearer ${tokenState}` },
      }
    );

    // console.log(`checking res in messageAdapter ${JSON.stringify(messageData)}`)
    setDataMessage(messageData.data.data);
    return messageData;
  }

  useEffect(() => {
    getMessages();
  }, [dataMessage]);

  const sendMessagesToSocket = async (data) => {
    console.log("emitting message to socket io");
    socket.emit("sendMessage", (room, data)); // emit THEN send data so server
    console.log("message emitted");
  };

  async function handleCLick() {
    setLoading(true);
    let element = document.getElementById("messageInput");
    const content = element.value;

    console.log(tokenState);
    console.log(content);

    const response = await axios(`http://localhost:3000/api/message/${room}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${tokenState}`,
      },
      data: {
        content: content,
      }
    })

    console.log(response);
    await sendMessagesToSocket(content);

    // console.log(`checking response.data @ CHAT: ${JSON.stringify(response.data)}`)

    element.value = "";
    socket.emit("join", room);
    // const message = await getMessages();
    // setDataMessage(message.data.data);
    setRandomID(Math.random());
    setLoading(false);
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      console.log("enter");
      handleCLick();
    }
  }

  return (
    <Box
      width="full"
      h="$100vh"
      bg="#0F172A"
      display="flex"
      flexDirection="column"
      borderBottom="1px"
    >
      <Box bg="#1E293B" display="flex" flexDirection="row" padding="0.5rem">
        <Avatar
          src=""
          width="48px"
          height="48px"
          visibility={displayProfilePictureState ? "visible" : "hidden"}
        />
        <Box gap="2" marginLeft="12px">
          <Text color="white" fontSize="16px">
            {" "}
            {selectedContactNameState}{" "}
          </Text>
          <Text color="#94A3B8" fontSize="12px">
            {selectedContactTagState}
          </Text>
        </Box>
      </Box>

      <Box id="renderMessageLocation" flex={1} overflowY="scroll">
        {dataMessage &&
          dataMessage.map((message) => {
            if (message === "" || null) {
              return <></>;
            } else {
              if (message.chat_room_id !== currentRoom) {
                console.log(
                  `wrong room: message room : ${message.chat_room_id} current room: ${currentRoom}`
                );
                return;
              }

              if (message.account_id !== currentUserId) {
                console.log(`rendering another messages`);
                return (
                  <AnotherMessageComponent
                    message={message.content}
                    key={message.message_id}
                  />
                );
              }

              console.log("rendering messages");
              return (
                <MessageComponent
                  message={message.content}
                  key={message.message_id}
                />
              );
            }
          })}
      </Box>
      <Box
        bg="#1E293B"
        display="flex"
        flexDirection="row"
        padding="1rem"
        gap="4"
        visibility={displayMessageBarState ? "visible" : "hidden"}
      >
        <Input
          id="messageInput"
          onKeyDown={handleEnterKey}
          placeholder="Write a Message...."
          _placeholder={{ color: "#93C5FD" }}
          h="42px"
          bg="#0F172A"
          borderRadius="10px"
          border="none"
          textColor="white"
          required
        ></Input>
        <Button
          isLoading={loading}
          id="sendMessage"
          onClick={handleCLick}
          w="42px"
          h="42px"
          bg="#93C5FD"
          color="white"
          borderRadius="12px"
          p={0}
        >
          <box-icon type="solid" name="send" size="sm"></box-icon>
        </Button>
      </Box>
    </Box>
  );
}