import { BiLike, BiDislike, BiCommentDetail } from "react-icons/bi";
import cl from "./TopicBottomPanel.module.css"

const TopicBottomPanel = () => {
  return (
    <div className={cl.container}>
        <div className={cl.element}>
        <BiLike />
        <p>12443</p>
        </div>
        <div className={cl.element}>
        <BiDislike />
        <p>23</p>
        </div>
        <div className={cl.element}>
        <BiCommentDetail/>
        <p>890</p>
        </div>
    </div>
  );
};

export default TopicBottomPanel;
