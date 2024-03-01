// Action type constant
export const SELECT_CONVERSATION = 'SELECT_CONVERSATION';

// Action creator for selecting a conversation
export const selectConversation = (conversationId) => ({
 type: SELECT_CONVERSATION,
 payload: conversationId,
});
