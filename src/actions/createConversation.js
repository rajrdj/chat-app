// Action type constant
export const CREATE_CONVERSATION = 'CREATE_CONVERSATION';

// Action creator for creating a conversation
export const createConversation = (conversation) => ({
 type: CREATE_CONVERSATION,
 payload: conversation,
});

// Asynchronous action creator for creating a conversation through an API and then dispatching the createConversation action
export const fetchAndCreateConversation = (conversationData) => async (dispatch) => {
 try {
    // Simulate creating a conversation through an API
    const response = await fetch('/api/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conversationData),
    });

    if (!response.ok) {
      throw new Error('Failed to create conversation');
    }

    const conversation = await response.json();

    // Dispatch the createConversation action with the created conversation
    dispatch(createConversation(conversation));
 } catch (error) {
    // Handle errors (e.g., show an error message to the user)
    console.error('Error fetching and creating conversation:', error);
 }
};
