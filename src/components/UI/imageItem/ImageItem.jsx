import cl from "./ImageItem.module.css"

const ImageItem = ({image, removeImage}) => {
  return (
    <div className={cl.container} onClick={removeImage}>
      <img className={cl.image} src={image} alt="Input"/>
      <div className={cl.caption}>
        <p>remove</p>
  </div>
    </div>
  );
};

export default ImageItem;
