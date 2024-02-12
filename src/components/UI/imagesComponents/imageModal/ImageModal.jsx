import Modal from "../../modal/Modal";
import cl from './ImageModal.module.css'
const ImageModal = ({visible, setVisible, image}) => {
  return (
   <Modal visible={visible} setVisible={setVisible}>
    <img className={cl.image} src={`data:image/jpeg;base64,${image}`}alt="Large"/>
   </Modal>
  );
};

export default ImageModal;
