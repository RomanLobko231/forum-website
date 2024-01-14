import cl from './Modal.module.css'
const Modal = ({visible, setVisible, content}) => {
    const rootClasses = [cl.modal]
    if (visible) {
        rootClasses.push(cl.active);
      }
      
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
        {content}
    </div>
  );
};

export default Modal;
