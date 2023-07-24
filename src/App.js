import './App.css'
import videoData from './data/videoData';
import { useContext, useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import VideosContext from './components/context/VideosContext';



function App(){

  const [editableVideo, setEditableVideo] = useState(null);
 

 
  function videoReducer(videoCard, action) {
    switch (action.type){
      case 'ADD':
        return [...videoCard, { ...action.payload, id: videoCard.length + 1 }];

      case 'DELETE' :
        return videoCard.filter((video) => video.id !== action.payload);

      case 'UPDATE' :
         const index = videoCard.findIndex((videoIndex) => videoIndex.id === action.payload.id);
        const newVideos = [...videoCard]
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos

      default: 
      return videoCard
    }
  }

  const [videoCard,dispatch] = useReducer(videoReducer, videoData);


function editVideo(id) {
  setEditableVideo(videoCard.find((video) => video.id === id));
}

console.log(VideosContext.value)

  return (
    <VideosContext.Provider value={videoCard}>
      <>
        <div className='input-field'>
          <AddVideo dispatch={dispatch} editVideos={editableVideo} />
        </div>
        <div className='App'>
          <VideoList 
          dispatch={dispatch} 
          // videos={videoCard} 
          editVideo={editVideo} />
        </div>
      </>
    </VideosContext.Provider>
  );
}

export default App