import cl from "./MessageLoader.module.css"

const MessageLoader = () => {
  return (
    <div className={cl.container}>
      <div className={cl.message}/>
      <div className={cl.message}/>
      <div className={cl.message}/>
    </div>
  );
};

export default MessageLoader;
