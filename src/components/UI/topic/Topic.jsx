import { useNavigate } from "react-router-dom";
import cl from "./Topic.module.css"
const Topic = ({topic}) => {

  const navigate = useNavigate()

  const navigateToTopic = () => {
      navigate("/topics/" + topic.id )
  }


  return (
    <div className={cl.container} onClick={navigateToTopic}>
        <div className={cl.image_container}>
        <img className={cl.image} src="./spain_flag.png"/>
        </div>
        <div className={cl.text_container}>
            <h4 className={cl.title}>{topic.title}</h4>
            <p>{topic.numberOfMessages}</p>
            <p className={cl.description}>{topic.description}</p>
        </div>
    </div>
  );
};

export default Topic;
