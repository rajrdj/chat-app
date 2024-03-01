// Action type constant
export const SEARCH_CONVERSATIONS = 'SEARCH_CONVERSATIONS';

// Action creator for searching conversations
export const searchConversations = (conversations) => ({
 type: SEARCH_CONVERSATIONS,
 payload: conversations,
});

// Asynchronous action creator for searching conversations through an API and then dispatching the searchConversations action
export const fetchAndSearchConversations = (query) => async (dispatch) => {
 try {
    // Simulate searching for conversations through an API
    const response = await fetch(`/api/conversations/search?query=${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error('Failed to search conversations');
    }

    const conversations = await response.json();

    // Dispatch the searchConversations action with the search results
    dispatch(searchConversations(conversations));
 } catch (error) {
    // Handle errors (e.g., show an error message to the user)
    console.error('Error fetching and searching conversations:', error);
 }
};
