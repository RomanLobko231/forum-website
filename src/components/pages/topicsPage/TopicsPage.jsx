import { useEffect, useState } from "react";
import cl from "./TopicsPage.module.css"
import TopicModal from "../../UI/modal/TopicModal";
import TopicsHeader from "../../UI/topicsHeader/TopicsHeader";
import TopicService from "../../../API/TopicService";
import TopicsList from "../../UI/topicsList/TopicsList";
import { useFetching } from "../../../hooks/useFetching";
import { TailSpin } from "react-loader-spinner";
import { useSorting } from "../../../hooks/useSorting";
import { LikeDislikeContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const TopicsPage = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [topics, setTopics] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedTopics = useSorting(topics, filter.sort, filter.query)

  const [fetchTopics, isLoading, error] = useFetching(async () => {
    const response = await TopicService.getAll();
    setTopics(response.data)
    console.log(response.data)
  })

  const navigate = useNavigate()

  const navigateToTopic = (id) => {
    navigate("/topics/" + id)
  }


  useEffect(() => {
    fetchTopics()
  }, [])

  const createTopic = async (topic) => {
    const response = await TopicService.createNewTopic(topic)
    const id = response.data.id
    navigateToTopic(id)
  }

  return (
    
      <div className={cl.upper__container}>
        <TopicModal visible={modalVisible} setVisible={setModalVisible} createTopic={createTopic} />
        <TopicsHeader filter={filter} setFilter={setFilter} setVisible={setModalVisible} />
        {isLoading
          ? <TailSpin color="#f1f9fc" radius="28px" />
          : <TopicsList topics={sortedTopics} />
        }
      </div>
   
  );
};

export default TopicsPage;
