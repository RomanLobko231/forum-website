import { useEffect, useState } from "react";
import cl from "./TopicsPage.module.css"
import TopicModal from "../../UI/modal/TopicModal";
import TopicsHeader from "../../UI/topicsHeader/TopicsHeader";
import TopicService from "../../../API/TopicService";
import Topic from "../../UI/topic/Topic";

const TopicsPage = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [topics, setTopics] = useState([])

  useEffect( () => {
    async function fetchTopics(){
      const response = await TopicService.getAll();
    setTopics(response.data)
    console.log(response.data)
    }
    fetchTopics()
  }, [])

  const createTopic = (topic) => {
    TopicService.createNewTopic(topic)
  }

  return (
    <div className={cl.upper__container}>
      <TopicModal visible={modalVisible} setVisible={setModalVisible} createTopic={createTopic} />
      <TopicsHeader setVisible={setModalVisible} />
      <div className={cl.topics__container}>
        {topics.map(topic =>
          <Topic title={topic.title} description={topic.description} key={topic.title}/>
        )}
      </div>
    </div>

  );
};

export default TopicsPage;
