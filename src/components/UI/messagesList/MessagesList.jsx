import cl from "./MessagesList.module.css"
import Message from "../message/Message";

const MessagesList = ({messages}) => {
    

  return (
    <div className={cl.container}>
      {messages.map(mess => 
                <Message message={mess} key={mess.id}/>
            )}
    </div>
  );
};

export default MessagesList;
