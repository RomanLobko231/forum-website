import cl from './ImageInput.module.css'

const ImageInput = ({checkAndSetImages, imagesCount}) => {
  return (
    <div className={cl.image__input}>
      <input className={cl.image} id="image" type="file" multiple accept="image/*" onChange={checkAndSetImages}/>
      <label htmlFor="image">Select images</label>
        <p>{imagesCount}</p>
    </div>
  );
};

export default ImageInput;
