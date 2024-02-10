import cl from './Modal.module.css'
const Modal = ({visible, setVisible, children}) => {
    const rootClasses = [cl.modal]
    if (visible) {
        rootClasses.push(cl.active);
      }
      
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
        {children}
    </div>
  );
};

export default Modal;
