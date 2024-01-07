import { useState } from "react";
import cl from "./TopicModal.module.css"

const TopicModal = ({ visible, setVisible, createTopic }) => {

  const [topic, setTopic] = useState({title: '', description: ''})
  const [image, setImage] = useState(null)
  const rootClasses = [cl.modal]

  if (visible) {
    rootClasses.push(cl.active);
  }

  const createNewTopic = (e) => {
    e.preventDefault() 
    const blob = new Blob([JSON.stringify(topic)], {
      type: 'application/json'
    })
    const data = new FormData();
    data.append('image', image);
    data.append('topic', blob);
    createTopic(data)
    setTopic({ title: '', description: ''})
    setVisible(false)
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.topic__form} >
          <label style={{marginTop: '4%'}} htmlFor="title">Title</label>
          <input className={cl.title__input}
          id="title"
            type="text"
            value={topic.title}
            onChange={(e) => setTopic({ ...topic, title: e.target.value })}
            placeholder="Topic Title"
          />
          <label htmlFor="description">Description</label>
          <textarea className={cl.description__input}
            id="description"
            value={topic.description}
            onChange={(e) => setTopic({ ...topic, description: e.target.value })}
            placeholder="Topic Description"
          />
          <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
          <button onClick={createNewTopic} >Post</button>
        </div>

      </div>
    </div>
  );
};

export default TopicModal;
