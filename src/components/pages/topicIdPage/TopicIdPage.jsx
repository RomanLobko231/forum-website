import { useFetcher, useParams } from "react-router-dom";
import TopicService from "../../../API/TopicService";
import { useEffect, useState } from "react";
import { useFetching } from "../../../hooks/useFetching";
import MessagesList from "../../UI/messagesList/MessagesList";
import { Hourglass, TailSpin } from "react-loader-spinner";
import MessageModal from "../../UI/messageModal/MessageModal";
import cl from "./TopicIdPage.module.css"
import TopicDescription from "../../UI/topicDescription/TopicDescription";
import MessagesPageDetails from "../../UI/messagesPageDetails/MessagesPageDetails";
import ImageModal from "../../UI/imageModal/ImageModal";

const TopicIdPage = () => {

    const params = useParams()
    const [topic, setTopic] = useState(null);
    const [messages, setMessages] = useState([])
    const [messageModal, setMessageModal] = useState(false)
    const [imageModal, setImageModal] = useState(false)
    const [imageSrc, setImageSrc] = useState("")
    const [fetchMessages, isLoading, error] = useFetching(async () => {
        const topic = await TopicService.getTopicById(params.id);
        setTopic(topic.data)
        setMessages(topic.data.messages)
        error != null ? console.log(error) : console.log(topic)
    })
    

    useEffect(() => {
        fetchMessages()
    }, [])

    const createMessage = async (message) => {
        await TopicService.createNewMessage(message, params.id)
        fetchMessages()
    }

    const setImage = (src) => {
        setImageModal(!imageModal)
        setImageSrc(src) 
        console.log(src)
    }
    

    

    return (
        <div className={cl.container}>
            <MessageModal visible={messageModal} setVisible={setMessageModal} createMessage={createMessage}/>
            <ImageModal visible={imageModal} setVisible={setImageModal} image={imageSrc}/>
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
            : <MessagesPageDetails messages={messages} topic={topic} setMessageModal={setMessageModal} setImage={setImage}/>
            }
        </div>
    );
};

export default TopicIdPage;
