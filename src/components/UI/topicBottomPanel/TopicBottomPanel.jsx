import { BiLike, BiDislike, BiSolidLike, BiSolidDislike, BiCommentDetail } from "react-icons/bi";
import cl from "./TopicBottomPanel.module.css"
import TopicService from "../../../API/TopicService";
import { useCallback, useContext, useState } from "react";
import { LikeDislikeContext } from "../../../context";

const TopicBottomPanel = ({topic}) => {

  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [likes, setLikes] = useState(topic.likes)
  const {fetchTopics} = useContext(LikeDislikeContext)

  const setLike = async () => {
    const updatedLikes = isLiked ? Math.max(likes - 1, 0) : topic.likes + 1;
    setIsLiked(!isLiked);

    try{
      await TopicService.updateTopic({...topic, likes: updatedLikes });
      setLikes(updatedLikes)
      // fetchTopics()
    }catch (e){
        console.log(e)
        setIsLiked(isLiked)
    }
  }

  const setDislike = useCallback(async () => {
    const updatedDislikes = isDisliked ? Math.max(topic.dislikes - 1, 0) : topic.dislikes + 1;
    setIsDisliked(!isDisliked);
    try{
      await TopicService.updateTopic({...topic, dislikes: updatedDislikes})
      fetchTopics()    
    }catch (e){
        console.log(e)
        setIsDisliked(isDisliked)
    }
  }, [])
//TODO: only registered users can like or dislike
  return (
    <div className={cl.container}>
        <div className={cl.element}>
        {isLiked 
            ?  <BiSolidLike onClick={setLike}/>
            :  <BiLike onClick={setLike}/>
            }
        <p>{likes}</p>
        </div>
        <div className={cl.element}>
          {isDisliked
          ? <BiSolidDislike onClick={setDislike}/>
          : <BiDislike onClick={setDislike}/>
          }
        <p>{topic.dislikes}</p>
        </div>
        <div className={cl.element}>
        <BiCommentDetail/>
        <p>{topic.numberOfMessages}</p>
        </div>
    </div>
  );
};

export default TopicBottomPanel;
