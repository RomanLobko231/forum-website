import { useRef, useState } from 'react';
import ImageItem from '../imageItem/ImageItem';
import cl from './ImageInput.module.css'

const ImageInput = ({ setImages, images }) => {

    const [error, setError] = useState('')
    const fileInputRef = useRef();

    const onInputClick = (event) => {
        event.target.value = ''
    }


    const checkAndSetImages = (e) => {
        const totalImagesSize = images.reduce((acc, img) => acc + img.size, 0) +
            Array.from(e.target.files).reduce((acc, img) => acc + img.size, 0);

        const totalImages = images.length + e.target.files.length


        if (totalImages > 3) {
            setError("Max 3 images allowed")
        } else if (totalImagesSize > 10 * 1024 * 1024) {
            setError("Total size of the images should be under 10MB")
        } else {
            setImages([...images, ...e.target.files])
            setError("")
        }
    }


    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index)
        setImages(newImages);
    }


    return (
        <div className={cl.image__input}>
            <input className={cl.image} id="image" type="file" multiple accept="image/*" ref={fileInputRef} onChange={checkAndSetImages} onClick={onInputClick} />
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
