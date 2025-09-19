import { FaRobot } from "react-icons/fa";

const ChatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
          chat.isError ? "error" : ""
        }`}
      >
        {chat.role === "model" && <FaRobot color="black" size={30} />}
        <p className="message-text text-black">{chat.text}</p>
      </div>
    )
  );
};

export default ChatMessage;
