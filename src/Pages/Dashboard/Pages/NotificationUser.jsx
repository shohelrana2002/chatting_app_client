import { Helmet } from "react-helmet";
import { useRef } from "react";

const NotificationUser = () => {
  const inputRef = useRef(null);

  const textSpeech = () => {
    const text = inputRef.current?.value || "";
    if (text.trim()) {
      const voice = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(voice);
    }
  };

  return (
    <>
      <Helmet>
        <title>Chatting || Notification</title>
      </Helmet>

      <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Text to Speech</h2>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type something to speak"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={textSpeech}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Speak
        </button>
      </div>
    </>
  );
};

export default NotificationUser;
