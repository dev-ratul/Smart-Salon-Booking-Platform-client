import { useRef } from "react";
import { companyInfo } from "../../data/companyInfo";
import { salonInfo } from "../../data/salonInfo";
import { servicesInfo } from "../../data/servicesInfo";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      // add a thinking placeholder for ther bot's response
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      // call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `
          You are Elegance AI, a smart salon assistant.
Use the following information to answer the user:

Company Info: ${JSON.stringify(companyInfo)}
Salon Info: ${JSON.stringify(salonInfo)}
Services Info: ${JSON.stringify(servicesInfo)}
- If the user asks about services, prices, or booking, respond using this data.
- If the service is not listed exactly, suggest the closest available service or politely say it's unavailable.
 ${userMessage}`,
        },
      ]);
    }, 600);
  };
  return (
    <form action="#" className="chat-form " onSubmit={handleFormSubmit}>
      <div className="join w-full ">
        <div className="w-full ">
          <label className="input bg-white outline text-black outline-[#ccc]  join-item rounded-bl-full rounded-tl-full">
            <input
              ref={inputRef}
              type="text"
              placeholder="How can i book an appoinment?"
              className="rounded-full placeholder:text-[#7e7e7e]  text-black}"
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary join-item rounded-br-full rounded-tr-full"
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
