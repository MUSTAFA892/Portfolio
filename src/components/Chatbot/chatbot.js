import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import '../Chatbot/chatbot.css';

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const API_BASE_URL = process.env.REACT_APP_Chatbot_Backend || 'http://localhost:5000';

  useEffect(() => {
    loadChatHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, loading]);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const loadChatHistory = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/history`);
      const data = await response.json();
      setChatHistory(data.reverse());
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const newEntry = { user: userMessage, bot: '' };
    const updatedChatHistory = [...chatHistory, newEntry];
    setChatHistory(updatedChatHistory);
    setUserMessage('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      const botMessage = data.bot || "I don't know.";

      updatedChatHistory[updatedChatHistory.length - 1].bot = botMessage;
      setChatHistory([...updatedChatHistory]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="chatbot-wrapper">
          <div className="chatbot-title">
            Let's Chat
          </div>
          <div className="chatbot-box" id="chat-box" ref={chatBoxRef}>
            {chatHistory.map((chat, index) => (
              <React.Fragment key={index}>
                <div className="item user">
                  <div className="msg">{chat.user}</div>
                </div>
                <div className="item bot">
                  <div className="msg">{chat.bot}</div>
                </div>
              </React.Fragment>
            ))}
            {loading && (
              <div className="item bot">
                <div className="msg">...</div>
              </div>
            )}
          </div>
          <div className="typing-area">
            <div className="input-field">
              <input
                type="text"
                id="user-input"
                placeholder="Type your message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
              />
            </div>
            <button
              id="send-button"
              className="btn-primary"
              onClick={sendMessage}
              disabled={!userMessage.trim()}
            >
              <i className="fa fa-paper-plane"></i> Send
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Chatbot;