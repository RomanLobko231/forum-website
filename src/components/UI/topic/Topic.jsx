import { useNavigate } from "react-router-dom";
import cl from "./Topic.module.css"
import TopicBottomPanel from "../topicBottomPanel/TopicBottomPanel";
const Topic = ({ topic }) => {

  const navigate = useNavigate()

  const navigateToTopic = () => {
    navigate("/topics/" + topic.id)
  }



  return (
    <div className={cl.topic__card}>
      <div className={cl.container} onClick={navigateToTopic}>
        <div className={cl.image_container}>
          <img className={cl.image} src="./image.png" />
        </div>
        <div className={cl.text_container}>
          <h4 className={cl.title}>{topic.title}</h4>
          <p className={cl.description}>{topic.description}</p>
        </div>
      </div>
      <TopicBottomPanel/>
    </div>

  );
};

export default Topic;
