import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    {
      sender: "Ms . Y",
      text: "You were the Chosen One!",
      time: new Date().toLocaleDateString(),
      align: "start",
    },
    { sender: "Mr. X", text: "I hate you!", time: "12:46", align: "end" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        {
          sender: "You",
          text: inputText,
          time: new Date().toLocaleDateString(),
          align: "end",
        },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`chat chat-${msg.align}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt={msg.sender}
                />
              </div>
            </div>
            <div className="chat-header">
              {msg.sender}
              <time className="text-xs opacity-50"> {msg.time}</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="mb-6 flex gap-x-2 w-full p-4 border-t">
        <div className="w-full relative">
          <label className="input w-full">
            <input
              type="text"
              className="grow  input-bordered"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
            />
          </label>
          <span className="absolute top-5 gap-x-2 right-3 flex items-center -translate-y-1/2">
            <FaCamera /> 🤨
          </span>
        </div>
        <button className="btn btn-primary" onClick={sendMessage}>
          <IoIosSend />
        </button>
      </div>
    </div>
  );
}
