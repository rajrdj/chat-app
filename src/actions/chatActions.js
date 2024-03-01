export const connectToChat = () => {
    return (dispatch) => {
       const socket = new WebSocket('ws://your-chat-server.com');
   
       socket.onopen = () => {
         console.log('Connected to chat server');
       };
   
       socket.onmessage = (event) => {
         const message = JSON.parse(event.data);
         dispatch({ type: 'RECEIVE_MESSAGE', payload: message });
       };
   
       socket.onclose = () => {
         console.log('Disconnected from chat server');
       };
   
       return () => {
         socket.close();
       };
    };
   };
   