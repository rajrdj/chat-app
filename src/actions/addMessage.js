// Action type constant
export const ADD_MESSAGE = 'ADD_MESSAGE';

// Action creator for adding a message
export const addMessage = (message) => ({
 type: ADD_MESSAGE,
 payload: message,
});

// Asynchronous action creator for fetching a message from an API and then dispatching the addMessage action
export const fetchAndAddMessage = (conversationId, messageText) => async (dispatch) => {
 try {
    // Simulate fetching a message from an API
    const response = await fetch(`/api/conversations/${conversationId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: messageText }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch message');
    }

    const message = await response.json();

    // Dispatch the addMessage action with the fetched message
    dispatch(addMessage(message));
 } catch (error) {
    // Handle errors (e.g., show an error message to the user)
    console.error('Error fetching and adding message:', error);
 }
};
