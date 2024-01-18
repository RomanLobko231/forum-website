import ImagesList from '../imagesList/ImagesList';
import cl from './TopicDescription.module.css'


const TopicDescription = ({topic, setImage}) => {

  if(!topic) {
    return(
      <div>
        <h1>Such topic does not exist</h1>
      </div>
    )
  }
  
  const data = topic.images === undefined || topic.images.length === 0 ? null : topic.images
  
  return (
    <div className={cl.container}>
      <h1>{topic.title}</h1>
      {data != null && <ImagesList images={data}  setImage={setImage}/> }     
      <p className={cl.description}>{topic.description}</p>
    </div>
  );
};

export default TopicDescription;
