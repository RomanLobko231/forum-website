import { useFetcher, useParams } from "react-router-dom";
import TopicService from "../../../API/TopicService";
import { useEffect, useState } from "react";
import { useFetching } from "../../../hooks/useFetching";
import MessagesList from "../../UI/messagesList/MessagesList";
import { Hourglass, TailSpin } from "react-loader-spinner";
import MessageModal from "../../UI/messageModal/MessageModal";
import cl from "./TopicIdPage.module.css"

const TopicIdPage = () => {

    const params = useParams()
    const [messages, setMessages] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [fetchMessages, isLoading, error] = useFetching(async () => {
        const response = await TopicService.getTopicById(params.id);
        setMessages(response.data.messages)
        console.log(response.data)
    })
    

    useEffect(() => {
        fetchMessages()
    }, [])

    const createMessage = async (message) => {
        await TopicService.createNewMessage(message, params.id)
        fetchMessages()
    }
    

    

    return (
        <div className={cl.container}>
            <button className={cl.create__button} onClick={() => setModalVisible(true)}>Create new</button>
            <MessageModal visible={modalVisible} setVisible={setModalVisible} createMessage={createMessage}/>
            {isLoading 
            ? <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            />
            : <MessagesList messages={messages}/>
            }
        </div>
    );
};

export default TopicIdPage;
