import cl from "./TopicDescriptionLoader.module.css"

const TopicDescriptionLoader = () => {
  return (
    <div className={cl.container}>
     <div className={cl.title}></div> 
      <div className={cl.image__container}>
        <div className={cl.image}></div>
        <div className={cl.image}></div>
        <div className={cl.image}></div>
      </div>
      <div className={cl.description}></div>
    </div>
  );
};

export default TopicDescriptionLoader;
