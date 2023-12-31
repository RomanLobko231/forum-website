import { useFetcher, useParams } from "react-router-dom";
import TopicService from "../../../API/TopicService";
import { useEffect, useState } from "react";
import { useFetching } from "../../../hooks/useFetching";
import MessagesList from "../../UI/messagesList/MessagesList";
import { Hourglass, TailSpin } from "react-loader-spinner";

const TopicIdPage = () => {

    const params = useParams()
    const [messages, setMessages] = useState([])
    const [fetchMessages, isLoading, error] = useFetching(async () => {
        const response = await TopicService.getTopicById(params.id);
        setMessages(response.data.messages)
    })

    useEffect(() => {
        fetchMessages()
    }, [])


    if (!messages.length) {
        return (
            <h1 style={{ textAlign: "center" }}>
                No messages yet!
            </h1>
        )
    }

    return (
        <div>
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
