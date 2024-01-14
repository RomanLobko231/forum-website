import cl from './ImagesList.module.css'


const ImagesList = ({images, setImage}) => {
  return (
    <div className={cl.image__container}>
      {images.map( (image, index) => 
       <img onClick={() => setImage(image.imageBytes)} src={`data:image/jpeg;base64,${image.imageBytes}`} key={index}/> 
        )}
    </div>
  );
};

export default ImagesList;
