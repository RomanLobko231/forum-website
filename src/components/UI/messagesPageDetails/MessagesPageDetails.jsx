import MessagesList from "../messagesList/MessagesList";
import TopicDescription from "../topicDescription/TopicDescription";
import cl from './MessagesPageDetails.module.css'

const MessagesPageDetails = ({topic, messages, setModalVisible}) => {
  return (
    <div className={cl.container}>
      <TopicDescription topic={topic}/>
      <button className={cl.create__button} onClick={() => setModalVisible(true)}>Create new</button>
      <MessagesList messages={messages}/>
    </div>
  );
};

export default MessagesPageDetails;
