const initialState = {
    conversations: [],
    selectedConversationId: null,
   };
   
   const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'CREATE_CONVERSATION':
         return {
           ...state,
           conversations: [...state.conversations, action.payload],
         };
       case 'SELECT_CONVERSATION':
         return {
           ...state,
           selectedConversationId: action.payload,
         };
       case 'SEARCH_CONVERSATIONS':
         return {
           ...state,
           conversations: action.payload,
         };
       default:
         return state;
    }
   };
   
   export default conversationsReducer;
   