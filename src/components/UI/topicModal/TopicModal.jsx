import { useState } from "react";
import cl from "./TopicModal.module.css"
import Modal from "../modal/Modal";

const TopicModal = ({ visible, setVisible, createTopic }) => {

  const [topic, setTopic] = useState({title: '', description: ''})
  const [images, setImages] = useState([])
  
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
    images.forEach(image => {
      data.append(`images`, image);
    });
    data.append('topic', blob);
    createTopic(data)

    setTopic({title: '', description: ''})
    setImages([])
    setVisible(false)
  }


  const checkAndSetImages = (e) => {
   if(e.target.files.length > 3) {
    alert("Max 3 images allowed, sorry")
    setImages([])
   } else {
    setImages([...images, ...e.target.files])
   }
  }

  return (
    <Modal visible={visible} setVisible={setVisible} content={
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
          <div>
          <input type="file" multiple accept="image/*" onChange={checkAndSetImages}/>
          <button onClick={createNewTopic} >Post</button>
          </div>
        </div>
      </div>
    }/>
  );
};

export default TopicModal;
