"use client";
import { Avatar, Button, Card, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const ConversationItem = ({
  role = "ai",
  message,
}: {
  role: "ai" | "user";
  message: string;
}) => {
  return (
    <div
      className={`py-4 flex gap-2 items-start ${
        role === "ai" ? "justify-start" : "justify-end"
      }`}
    >
      {role === "ai" && (
        <div>
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
            className="w-[40px] !space-x-0 !m-0"
            size={"sm"}
          />
        </div>
      )}

      <div
        className={`px-2 py-1 ${
          role === "ai" ? "bg-primary text-white" : "bg-[#ECF2F6] text-gray-600"
        }  rounded-md`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState<
    {
      text: string;
      role: "ai" | "user";
    }[]
  >();

  useEffect(() => {
    // set default message
    setMessages([
      {
        text: "Let's get started...",
        role: "ai",
      },
      {
        text: "How can you help me?",
        role: "user",
      },
    ]);
  }, []);

  // message input ref
  const messageInputRef = useRef(null);

  const sendMessage = () => {
    // if has message
    if (messageInputRef?.current && messageInputRef.current?.value) {
      const message = messageInputRef.current.value;
      // push new message to state
      setMessages((prevMessage) => [
        ...prevMessage,
        {
          text: message,
          role: "user",
        },
      ]);
      // clear input
      messageInputRef.current.value = "";
    }
  };

  const onPressEnterKey = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-box bg-white relative">
      <div className="py-2 px-4 border-b border-primary">
        <h1 className="text-2xl font-bold">
          M-<span className="text-secondary">AI</span> Chat
        </h1>
      </div>
      <div className="py-4">
        <div className="min-h-[390px] max-h-[390px] overflow-y-auto px-4">
          <div className="w-full h-[500px]">
            {messages?.map(
              (
                item: {
                  text: string;
                  role: "ai" | "user";
                },
                index: number
              ) => (
                <ConversationItem
                  role={item.role}
                  message={item.text}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 items-center relative">
          <input
            className="w-full py-3 px-3 outline-0"
            placeholder="Write your message..."
            ref={messageInputRef}
            onKeyDown={onPressEnterKey}
          />
          <button
            className="absolute top-0 bottom-0 m-auto right-4 text-2xl"
            onClick={sendMessage}
          >
            <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
