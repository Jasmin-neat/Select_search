import React, { useState, useRef, useEffect } from "react";
import GptField from "../InputBox/GptField";
import Author from "./Author";

interface GptData {
  message: string;
  direction: string;
  sender: string;
}

const Chat: React.FC = () => {
  const systemMessage = {
    //  Explain things like you're talking to a software professional with 5 years of experience.
    role: "assistant",
    content: "Ask me anything!",
  };

  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const [displayedText, setDisplayedText] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Ask me anything!",
      direction: "incoming",
      sender: "SONSHI",
    },
  ]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleEnterPress = (inputText: string) => {
    setDisplayedText(inputText);
    handleSend(inputText);
  };

  const handleSend = async (message: string) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "Toru",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages: GptData[]) => {
    const apiMessages = chatMessages.map((messageObject: GptData) => {
      let role = "";
      if (messageObject.sender === "SONSHI") {
        role = "assistant";
      } else {
        role = "user";
      }

      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              direction: data,
              sender: "SONSHI",
            },
          ]);
        });
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="w-full relative px-24 pt-24 pb-12">
      {messages.map((message, i) => {
        return (
          <Author
            key={i}
            authorName={message.sender}
            type={true}
            data={message.message}
          />
        );
      })}
      <div className="h-16 bg-white">

      </div>
      <div ref={endOfMessagesRef} />
      <GptField onEnterPress={handleEnterPress} />
    </div>
  );
};

export default Chat;
