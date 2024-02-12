import { useEffect, useState } from "react";
import cl from "./TopicModal.module.css"
import Modal from "../modal/Modal";
import ImageInput from "../imagesComponents/imageInput/ImageInput";
import TextInput from "../inputField/TextInput";
import { useForm } from "react-hook-form";

const TopicModal = ({ visible, setVisible, createTopic }) => {

  const [topic, setTopic] = useState({ title: '', description: '' })
  const [images, setImages] = useState([])
  const [error, setError] = useState('')

  const onSubmit = () => {
    //e.preventDefault() 
    alert("booba")
    // if(topic.title.trim() === ''){
    //   alert("Title should not be empty")
    // } else if (topic.title.length > 200){
    //   alert("Title should be less then 200 characters")
    // }else{
    //   const blob = new Blob([JSON.stringify(topic)], {
    //   type: 'application/json'
    // })
    // const data = new FormData();
    // images.forEach(image => {
    //   data.append(`images`, image);
    // });
    // data.append('topic', blob);

    // setTopic({title: '', description: ''})
    // setImages([])
    // createTopic(data)
    // setVisible(false)
    // }
  }

  // useEffect(() => {
  //   const totalImagesSize = images.reduce((acc, img) => acc + img.size, 0) 
  //   const totalImages = images.length 

  //   if (totalImages > 3) {
  //     //alert("Max 3 images allowed")
  //     setError("Max 3 images allowed")
  //   } else if (totalImagesSize > 10 * 1024 * 1024) {
  //     //alert("Total size of the images should be under 10MB")
  //     setError("Total size of the images should be under 10MB")
  //   } else {
  //     setError('')
  //   }
  // }, [images]);
  
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index)
    setImages(newImages);

  }

  const checkAndSetImages = (e) => {
    const totalImagesSize = images.reduce((acc, img) => acc + img.size, 0) +
      Array.from(e.target.files).reduce((acc, img) => acc + img.size, 0);

    const totalImages = images.length + e.target.files.length

    console.log(e.target.files)

    if (totalImages > 3) {
      alert("Max 3 images allowed")
      //setError("Max 3 images allowed")
    } else if (totalImagesSize > 10 * 1024 * 1024) {
      alert("Total size of the images should be under 10MB")
      //setError("Total size of the images should be under 10MB")
    } else {
      setImages([...images, ...e.target.files])
      //setError("")
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();


  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        <form className={cl.topic__form} onSubmit={handleSubmit(onSubmit)}>
          <p>New Topic</p>
          <TextInput
            type='text'
            autocomplete="off"
            placeholder='Topic Title'
            registerName='title'
            register={register}
            errors={errors}
            constraints={{
              required: "This field is required"
            }
            }
          />
          <textarea className={cl.description__input}
            value={topic.description}
            onChange={(e) => setTopic({ ...topic, description: e.target.value })}
            placeholder="Topic Description"
          />
          <ImageInput checkAndSetImages={checkAndSetImages} images={images} removeImage={removeImage} error={error}/>
          <button className={'button'} type="submit" >Post</button>
        </form>
      </div>
    </Modal>
  );
};

export default TopicModal;
