import cl from './TopicDescription.module.css'


const TopicDescription = ({topic}) => {
  return (
    <div className={cl.container}>
      <h1>{topic.title}</h1>
      <img className={cl.image} src="../image.png" />      
      <p>{topic.description}</p>
    </div>
  );
};

export default TopicDescription;
