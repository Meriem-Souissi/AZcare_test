import React, { useState } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage: Message = { text: `from bot ${input}`, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          width: "300px"
        }}
      >
        <div
          style={{
            backgroundColor: "whitesmoke"
          }}
        >
          {messages.map((msg, index) => (
            <div key={index} style={{}}>
              {msg.text}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <input
            type="text"
            value={input}
            onChange={handleChange}
            style={{
              border: "1px solid black"
            }}
          />
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "8px",
              padding: "4px 6px"
            }}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
