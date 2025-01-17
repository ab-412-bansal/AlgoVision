// src/components/ChatbotPage.js
import React from 'react';
import '../styles/Chatbot.css'

const ChatbotPage = () => {
  return (
    <div className='chatbot-container'>
      <h2 className='chatbot-title'>Chat with AlgoBot</h2>
      <iframe
        title="Chatbot"
        src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=12291477-b58a-4b8e-b3cd-53640f88d29f"
        width="350"
        height="430"
      />
    </div>
  );
};

export default ChatbotPage;
