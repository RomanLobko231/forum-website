import Topic from "../topic/Topic";
import cl from "./TopicsList.module.css"

const TopicsList = ({topics}) => {
  return (
    <div className={cl.topics__container}>
        {topics.map(topic =>
          <Topic topic={topic} key={topic.id}/>
        )}
      </div>
  );
};

export default TopicsList;
