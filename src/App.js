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

function deleteVideo(id){
  setVideoCard(videoCard.filter((video) => video.id !== id));
}

function editVideo(id) {
  console.log(videoCard.find(video=>video.id===id))
}

  return (
    <>
      <div className='input-field'>
        <AddVideo addVideo={addVideos} />
      </div>
      <div className='App'>
        <VideoList
          videos={videoCard}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        />
      </div>
    </>
  );
}

export default App