import { useEffect, useRef, useState } from "react";
import { FaRobot } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { companyInfo } from "../../data/companyInfo";
import { salonInfo } from "../../data/salonInfo";
import { servicesInfo } from "../../data/servicesInfo";
import ChatForm from "../ChatForm/ChatForm";
import ChatMessage from "../ChatMessage/ChatMessage";

const Chatbot = ({ setIsOpenChat }) => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: `
Company Info:
${companyInfo}

Services Info:
${JSON.stringify(servicesInfo, null, 2)}

Salon Info:
${JSON.stringify(salonInfo, null, 2)}
    `,
    },
  ]);
  const chatBodyRef = useRef(null);

  const generateBotResponse = async (history) => {
    // helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg?.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    // formate chat history for api request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // make the api call to get the bot's response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");
      // clean and update chat history with bot's response
      const apiResponseText = data?.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      console.log(apiResponseText);
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    // auto scroll whenever chat history updates
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="container">
      <div className="chat-popup">
        {/* chatbot header  */}
        <div className="chat-header">
          <div className="header-info">
            <h2 className="logo-text">Chat With AI</h2>
          </div>
          <button
            className="h-8 cursor-pointer w-8 flex items-center justify-center bg-info rounded-full"
            onClick={() => setIsOpenChat(false)}
          >
            <MdOutlineKeyboardArrowDown size={35} />
          </button>
        </div>
        {/* chatbot body  */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <FaRobot size={30} color="black" />
            <p className="message-text text-black">
              Hey there <br /> How can i help you today?
            </p>
          </div>
          {/* render the chat history dynamically  */}
          {chatHistory?.map((chat, idx) => (
            <ChatMessage key={idx} chat={chat} />
          ))}
        </div>
        {/* chatbot footer  */}
        <div className="chat-footer bg">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
