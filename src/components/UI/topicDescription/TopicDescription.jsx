import ImagesList from '../imagesList/ImagesList';
import cl from './TopicDescription.module.css'


const TopicDescription = ({topic, setImage}) => {

  
  const data = topic.images === undefined || topic.images.length == 0 ? null : topic.images
  return (
    <div className={cl.container}>
      <h1>{topic.title}</h1>
      {data != null && <ImagesList images={data}  setImage={setImage}/> }     
      <p className={cl.description}>{topic.description}</p>
    </div>
  );
};

export default TopicDescription;
