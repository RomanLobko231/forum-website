import { useEffect } from 'react';
import PostService from './API/TopicService';
import './App.css';
import Topic from './UI/topic/Topic';

function App() {

  useEffect(() => {
    const response = PostService.getAll();
    console.log(response.data)
  })


  return (
    <div style={{padding: "20px 5px", justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
      <Topic/>
    </div>
  );
}

export default App;
