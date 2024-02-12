import ImageItem from '../imageItem/ImageItem';
import cl from './ImageInput.module.css'

const ImageInput = ({ checkAndSetImages, images, removeImage, error}) => {

    return (
        <div className={cl.image__input}>
            <input className={cl.image} id="image" type="file" multiple accept="image/*" onChange={checkAndSetImages} /> On change does not get called correctly
            <label htmlFor="image">Select images</label>
            {images !== undefined &&
                <div className={cl.gradient}>
                    <div className={cl.image__container}>
                        {images.map((image, index) =>
                            <img src={URL.createObjectURL(image)} key={index} alt="Your input files" onClick={() => removeImage(index)} />
                        )}
                    </div>
                </div>
            }
            {error && <p>{error}</p>}
        </div>
    );
};

export default ImageInput;
