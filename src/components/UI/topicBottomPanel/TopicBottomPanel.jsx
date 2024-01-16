import { BiLike, BiDislike, BiSolidLike, BiSolidDislike, BiCommentDetail } from "react-icons/bi";
import cl from "./TopicBottomPanel.module.css"
import TopicService from "../../../API/TopicService";
import { useCallback, useContext, useState } from "react";
import { LikeDislikeContext } from "../../../context";

const TopicBottomPanel = ({ topic }) => {

  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [likes, setLikes] = useState(topic.likes)
  const [dislikes, setDislikes] = useState(topic.dislikes)

  const setLike = async () => {
    const updatedLikes = isLiked ? Math.max(likes - 1, 0) : topic.likes + 1;
    const updatedDislikes = isDisliked ? dislikes - 1 : topic.dislikes

    try {
      await TopicService.updateLikesDislikes({likes: updatedLikes, dislikes: updatedDislikes, id: topic.id});

      setIsDisliked(false)
      setDislikes(updatedDislikes)

      setIsLiked(!isLiked)
      setLikes(updatedLikes)
    } catch (e) {
      console.log(e)
      setIsLiked(isLiked)
      setIsDisliked(isDisliked)
    }
  }

  const setDislike = async () => {

    const updatedLikes = isLiked ? likes - 1 : topic.likes
    const updatedDislikes = isDisliked ? Math.max(dislikes - 1, 0) : topic.dislikes + 1;

    try {
      await TopicService.updateLikesDislikes({likes: updatedLikes, dislikes: updatedDislikes, id: topic.id});

      setIsLiked(false)
      setLikes(updatedLikes)

      setIsDisliked(!isDisliked)
      setDislikes(updatedDislikes)
    } catch (e) {
      console.log(e)
      setIsDisliked(isDisliked)
      setIsLiked(isLiked)
    }
  }
  //TODO: only registered users can like or dislike
  return (
    <div className={cl.container}>
      <div className={cl.element}>
        {isLiked
          ? <BiSolidLike onClick={setLike} />
          : <BiLike onClick={setLike} />
        }
        <p>{likes}</p>
      </div>
      <div className={cl.element}>
        {isDisliked
          ? <BiSolidDislike onClick={setDislike} />
          : <BiDislike onClick={setDislike} />
        }
        <p>{dislikes}</p>
      </div>
      <div className={cl.element}>
        <BiCommentDetail />
        <p>{topic.numberOfMessages}</p>
      </div>
    </div>
  );
};

export default TopicBottomPanel;
