import cl from './TopicDescription.module.css'


const TopicDescription = ({topic}) => {

  
  const data = topic.images === undefined || topic.images.length == 0 ? null : topic.images[0].imageBytes
  return (
    <div className={cl.container}>
      <h1>{topic.title}</h1>
      {data != null && <img className={cl.image} src={`data:image/jpeg;base64,${data}`} /> }     
      <p>{topic.description}</p>
    </div>
  );
};

export default TopicDescription;
