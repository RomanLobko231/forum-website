import { useState } from "react";
import cl from "./TopicModal.module.css"

const TopicModal = ({ visible, setVisible,  createTopic}) => {

  const [topic, setTopic] = useState({ title: '', description: '' })
  const rootClasses = [cl.modal]

  if (visible) {
    rootClasses.push(cl.active);
  }

  const createNewTopic = (e) => {
    e.preventDefault()
    createTopic(topic)
    setTopic({title: '', description: ''})
    setVisible(false)
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        <form className={cl.topic__form} onSubmit={createNewTopic}>
          <input
            type="text"
            value={topic.title}
            onChange={(e) => setTopic({ ...topic, title: e.target.value })}
            placeholder="Topic Title"
          />
          <input
            type="text"
            value={topic.description}
            onChange={(e) => setTopic({ ...topic, description: e.target.value })}
            placeholder="Topic Description"
          />
          <button type="submit" >Post</button>
        </form>

      </div>
    </div>
  );
};

export default TopicModal;
