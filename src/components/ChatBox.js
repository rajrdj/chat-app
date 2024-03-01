import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectConversation, addMessage } from '../actions';

const ChatBox = () => {
 const [message, setMessage] = useState('');
 const conversations = useSelector(state => state.conversations);
 const selectedConversationId = useSelector(state => state.selectedConversationId);
 const selectedConversation = conversations.find(conversation => conversation.id === selectedConversationId);
 const dispatch = useDispatch();

 useEffect(() => {
    // Automatically select the first conversation if none is selected
    if (!selectedConversationId && conversations.length > 0) {
      dispatch(selectConversation(conversations[0].id));
    }
 }, [conversations, selectedConversationId, dispatch]);

 const handleSendMessage = () => {
    if (message.trim() !== '' && selectedConversationId) {
      const newMessage = {
        text: message,
        conversationId: selectedConversationId,
      };
      dispatch(addMessage(newMessage));
      setMessage('');
    }
 };

 return (
    <div>
      <h2>{selectedConversation ? selectedConversation.name : 'No Conversation Selected'}</h2>
      <ul>
        {selectedConversation ? selectedConversation.messages.map((msg, index) => (
          <li key={index}>{msg.text}</li>
        )) : null}
      </ul>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
 );
};

export default ChatBox;
