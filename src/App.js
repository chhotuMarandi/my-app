import './App.css'
import videoData from './data/videoData';
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';


function App(){

  function videoReducer(videoCard, action) {
    switch (action.type){
      case 'ADD':
        return [...videoCard, { ...action.payload, id: videoCard.length + 1 }];
      default: 
      return videoCard
    }
  }

  const [videoCard,dispatch] = useReducer(videoReducer, videoData);

  // const [videoCard, setVideoCard] = useState(videoData);

  const [editableVideo,setEditableVideo] = useState(null)

  function addVideos(video){
    dispatch({type: 'ADD', payload : video})
    //action : {type : 'ADD', payload : video}
    // setVideoCard([...videoCard, { ...video, id: videoCard.length + 1 }]);
  }

function deleteVideo(id){
  // setVideoCard(videoCard.filter((video) => video.id !== id));
}

function editVideo(id) {
  // setEditableVideo(videoCard.find((video) => video.id === id));
}

function updateVideo(video){
 const index = videoCard.findIndex((videoIndex) => videoIndex.id === video.id);

 const newVideos = [...videoCard]
 newVideos.splice(index, 1, video);
//  setVideoCard(newVideos);
 console.log(newVideos)
}

  return (
    <>
      <div className='input-field'>
        <AddVideo
          addVideo={addVideos}
          updateVideo={updateVideo}
          editVideos={editableVideo}
        />
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