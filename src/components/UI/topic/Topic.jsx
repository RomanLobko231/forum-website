import cl from "./Topic.module.css"
const Topic = ({title, description}) => {
  return (
    <div className={cl.container}>
        <div className={cl.image_container}>
        <img className={cl.image} src="./spain_flag.png"/>

        </div>
        
        <div className={cl.text_container}>
            <h2 className={cl.title}>{title}</h2>
            <h4 className={cl.description}>{description}</h4>
        </div>
    </div>
  );
};

export default Topic;
