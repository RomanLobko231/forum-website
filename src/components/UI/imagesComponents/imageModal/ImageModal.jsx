import Modal from "../../modal/Modal";
import cl from './ImageModal.module.css'
const ImageModal = ({visible, setVisible, image}) => {
  return (
   <Modal visible={visible} setVisible={setVisible} content={
    <img className={cl.image} src={`data:image/jpeg;base64,${image}`}alt="Large"/>
   }/>
  );
};

export default ImageModal;
