// components/chat/ChatComponent.tsx

import React, { useState } from 'react';

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div>
      <div id="chat-window" style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        style={{ marginRight: '5px' }}
      />
      <button onClick={sendMessage}>Senden</button>
    </div>
  );
};

export default ChatComponent;
