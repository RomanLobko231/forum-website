import { useState } from "react";
import cl from "./TopicModal.module.css"
import Modal from "../modal/Modal";
import ImageInput from "../imageInput/ImageInput";

const TopicModal = ({ visible, setVisible, createTopic }) => {

  const [topic, setTopic] = useState({title: '', description: ''})
  const [images, setImages] = useState([])
  const [imagesURLs, setImagesURLs] = useState([])
  
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
    const totalImages = images.length + e.target.files.length
   if(totalImages > 3 ) {
    alert("Max 3 images allowed, sorry")
    setImages([])
   } else {
    setImages([...images, ...e.target.files])
    let url = Array.from(e.target.files).map((image) => URL.createObjectURL(image)); 
    setImagesURLs([...imagesURLs, ...url])
   }
  }

  return (
    <Modal visible={visible} setVisible={setVisible} content={
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.topic__form} >
          {/* <label style={{marginTop: '4%'}} htmlFor="title">Title</label> */}
          <p>New Topic</p>
          <input className={cl.title__input}
           id="title"
            type="text"
            value={topic.title}
            onChange={(e) => setTopic({ ...topic, title: e.target.value })}
            placeholder="Topic Title"
          />
          {/* <label htmlFor="description">Description</label> */}
          <textarea className={cl.description__input}
            id="description"
            value={topic.description}
            onChange={(e) => setTopic({ ...topic, description: e.target.value })}
            placeholder="Topic Description"
          />
          <ImageInput checkAndSetImages={checkAndSetImages} images={imagesURLs}/>
          <button className={'button'} onClick={createNewTopic} >Post</button>
        </div>
      </div>
    }/>
  );
};

export default TopicModal;
