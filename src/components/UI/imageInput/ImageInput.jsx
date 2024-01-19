import cl from './ImageInput.module.css'

const ImageInput = ({ checkAndSetImages, images }) => {

    return (
        <div className={cl.image__input}>
            <input className={cl.image} id="image" type="file" multiple accept="image/*" onChange={checkAndSetImages} />
            <label htmlFor="image">Select images</label>
            {images !== undefined && 
            <div className={cl.gradient}>
               <div className={cl.image__container}>
                    {images.map( (image, index) =>
                        <img src={image} key={index} alt="Your input files"/>
                    )}
                </div> 
            </div>
                
            }

        </div>
    );
};

export default ImageInput;
