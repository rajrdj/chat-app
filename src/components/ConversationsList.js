import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectConversation } from '../actions';

const ConversationsList = () => {
 const conversations = useSelector(state => state.conversations);
 const selectedConversationId = useSelector(state => state.selectedConversationId);
 const dispatch = useDispatch();

 const handleSelectConversation = (conversationId) => {
    dispatch(selectConversation(conversationId));
 };

 return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => handleSelectConversation(conversation.id)}>
            {conversation.name}
            {selectedConversationId === conversation.id && <span> (Selected)</span>}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default ConversationsList;
