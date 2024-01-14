import MessagesList from "../messagesList/MessagesList";
import TopicDescription from "../topicDescription/TopicDescription";
import cl from './MessagesPageDetails.module.css'

const MessagesPageDetails = ({topic, messages, setMessageModal, setImage}) => {
  return (
    <div className={cl.container}>
      <TopicDescription topic={topic} setImage={setImage}/>
      <button className={cl.create__button} onClick={() => setMessageModal(true)}>Create new</button>
      <MessagesList messages={messages}/>
    </div>
  );
};

export default MessagesPageDetails;
