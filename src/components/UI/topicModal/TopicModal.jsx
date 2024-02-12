import { useEffect, useState } from "react";
import cl from "./TopicModal.module.css"
import Modal from "../modal/Modal";
import ImageInput from "../imagesComponents/imageInput/ImageInput";
import TextInput from "../inputField/TextInput";
import { useForm } from "react-hook-form";
import InputError from "../inputError/InputError";

const TopicModal = ({ visible, setVisible, createTopic }) => {

  //const [topic, setTopic] = useState({ title: '', description: '' })
  const [images, setImages] = useState([])

  const onSubmit = (topic) => {
    console.log(topic)
    console.log(images)

    const blob = new Blob([JSON.stringify(topic)], {
      type: 'application/json'
    })
    const data = new FormData();
    images.forEach(image => {
      data.append(`images`, image);
    });
    data.append('topic', blob);
    console.log(data)

    //setTopic({ title: '', description: '' })
    setImages([])
    createTopic(data)
    setVisible(false)

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
              required: "This field is required",
              maxLength: {
                value: 200,
                message: "Title must not exceed 200 characters"
              }
            }
            }
          />
          <textarea 
          className={cl.description__input}
           // value={topic.description}
            //onChange={(e) => setTopic({ ...topic, description: e.target.value })}
            placeholder="Topic Description"
            type='textarea'
            {...register("description", {
              required: false,
              maxLength: {
                  value: 5000,
                  message: "Description must not exceed 5000 characters"
              }})}
          />
          {errors.description && <InputError errorMessage={errors.description.message}/>}
          <ImageInput setImages={setImages} images={images} />
          <button className={'button'} type="submit" >Post</button>
        </form>
      </div>
    </Modal>
  );
};

export default TopicModal;
