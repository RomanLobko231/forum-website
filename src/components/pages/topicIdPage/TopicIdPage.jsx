import { Navigate, useNavigate, useParams } from "react-router-dom";
import TopicService from "../../../API/TopicService";
import { useEffect, useState } from "react";
import { useFetching } from "../../../hooks/useFetching";
import MessageModal from "../../UI/messageModal/MessageModal";
import cl from "./TopicIdPage.module.css"
import TopicDescription from "../../UI/topicDescription/TopicDescription";
import MessagesPageDetails from "../../UI/messagesPageDetails/MessagesPageDetails";
import ImageModal from "../../UI/imagesComponents/imageModal/ImageModal";
import TopicDescriptionLoader from "../../UI/loader/TopicDescriptionLoader";
import MessageLoader from "../../UI/loader/MessageLoader";
import ErrorComponent from "../../UI/errorComponent/ErrorComponent";

const TopicIdPage = () => {

    const params = useParams()
    const [topic, setTopic] = useState(null);
    const [messages, setMessages] = useState([])
    const [messageModal, setMessageModal] = useState(false)
    const [imageModal, setImageModal] = useState(false)
    const [imageSrc, setImageSrc] = useState("")
    const [fetchTopic, isLoading, error] = useFetching(async () => {
        const topic = await TopicService.getTopicById(params.id);
        setTopic(topic.data)
        setMessages(topic.data.messages)
    })

    const[fetchMessages, isMessagesLoading, msgError] = useFetching( async () => {
        const newMessages = await TopicService.getMessagesByTopicId(params.id);
        setMessages(newMessages.data)
    })
    

    useEffect(() => {
        fetchTopic()
    }, [])

    const createMessage = async (message) => {
        await TopicService.createNewMessage(message, params.id)
        fetchMessages()
    }

    const setImage = (src) => {
        setImageModal(!imageModal)
        setImageSrc(src) 
    }
    
    if(error) {
        return(
            <ErrorComponent error={error}/>
        )
    }
    

    return (
        <div className={cl.container}>
            <MessageModal visible={messageModal} setVisible={setMessageModal} createMessage={createMessage}/>
            <ImageModal visible={imageModal} setVisible={setImageModal} image={imageSrc}/>
            <TopicDescription topic={topic} setImage={setImage} isLoading={isLoading}/>
            {isMessagesLoading || isLoading
            ?  <MessageLoader/> 
            :  <MessagesPageDetails messages={messages} topic={topic} setMessageModal={setMessageModal} setImage={setImage}/>
            }
        </div>
    );
};

export default TopicIdPage;
