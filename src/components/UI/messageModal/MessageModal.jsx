import { useState } from "react";
import cl from "./MessageModal.module.css"
import Modal from "../modal/Modal";

const MessageModal = ({visible, setVisible, createMessage}) => {
    const [messageText, setMessage] = useState('')
    const rootClasses = [cl.modal]
  
    if (visible) {
      rootClasses.push(cl.active);
    }
  
    const createNewMessage= (e) => {
      e.preventDefault()
      createMessage(messageText)
      setMessage('')
      setVisible(false)
    }
  
    return (
      <Modal visible={visible} setVisible={setVisible} content={
        <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
          <div className={cl.topic__form} >
            <label htmlFor="message">Your message</label>
            <textarea className={cl.description__input}
              id="message"
              value={messageText}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <button onClick={createNewMessage} >Post</button>
          </div>
  
        </div>
      }/>
        
    );
};

export default MessageModal;
