import './App.css'
import videoData from './data/videoData';
import { useContext, useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import VideosContext from './components/context/VideosContext';
import VideosDispatchContext from './components/context/VideosDispatchContext'



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


  return (
    <VideosContext.Provider value={videoCard}>
      <VideosDispatchContext.Provider value={dispatch}>
        <>
          <div className='input-field'>
            <AddVideo editVideos={editableVideo} />
          </div>
          <div className='App'>
            <VideoList editVideo={editVideo} />
          </div>
        </>
      </VideosDispatchContext.Provider>
    </VideosContext.Provider>
  );
}

export default App