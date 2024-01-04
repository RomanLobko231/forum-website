import { useState } from "react";
import MessageModal from "../messageModal/MessageModal";
import cl from "./MessagesList.module.css"

const MessagesList = ({messages}) => {
    

  return (
    <div className={cl.container}>
    
      {messages.map(mess => 
                <p>{mess.message}</p>
            )}
    </div>
  );
};

export default MessagesList;
