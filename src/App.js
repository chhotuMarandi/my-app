import './App.css'
import PlayButton from './components/PlayButton';
import Video from './components/Video'
import videosData from './data/data'
import Counter from './components/Counter';
import { useState } from 'react';
import AddVideo from './components/AddVideo';

function App() { 

  const [videos, setVideos] = useState(videosData);

  function addVideos(video) {
    setVideos([
      ...videos,
      {...video, key: video.length + 1}
    ]);
  }


 return (
   <>
     <div>
       <AddVideo addVideos={addVideos} />
     </div>
     <div className='App'>
       {videos.map((video) => {
         return (
           <Video
             key={video.key}
             title={video.title}
             channel={video.channel}
             views={video.views}
             time={video.time}
             image={video.image}
             verified={video.verified}
           >
             <PlayButton
               onPlay={() => console.log('playing', video.title)}
               onPause={() => console.log('paused', video.title)}
             >
               {video.title}
             </PlayButton>
           </Video>
         );
       })}
     </div>
   </>
 );
}

export default App;
