import './App.css'
import videoData from './data/videoData';
import { useContext, useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './components/context/ThemeContext';



function App(){

  const [editableVideo, setEditableVideo] = useState(null);

  const themeContext = useContext(ThemeContext);



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
    <>
      <div className='input-field'>
        <AddVideo dispatch={dispatch} editVideos={editableVideo} />
      </div>
      <div className={`App ${themeContext}`}>
        <VideoList
          videos={videoCard}
          dispatch={dispatch}
          editVideo={editVideo}
        />
      </div>
    </>
  );
}

export default App