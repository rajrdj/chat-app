import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectToChat } from '../actions/chatActions';


const ChatContainer = () => {
 const dispatch = useDispatch();
 const messages = useSelector(state => state.chat.messages);

 useEffect(() => {
    dispatch(connectToChat());
 }, [dispatch]);


 function ChatContainer() {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        dispatch(connectToChat());
    }, [dispatch]);

}
  return (
      <div className="container"></div>

    // Your component logic here

  )
};
export default ChatContainer;
