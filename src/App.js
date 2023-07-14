import './App.css'
import videoData from './data/videoData';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';


function App(){

  const [videoCard, setVideoCard] = useState(videoData);

  function addVideos(video){
    setVideoCard([...videoCard, { ...video, id: videoCard.length + 1 }]);
  }


  return (
    <>
      <div className='input-field'>
        <AddVideo addVideo={addVideos} />
      </div>
      <div className='App'>
        <VideoList videos={videoCard} />
      </div>
    </>
  );
}

export default App