import './App.css'
import PlayButton from './components/PlayButton';
import Video from './components/Video'
import videosData from './data/data'
import Counter from './components/Counter';
import { useState } from 'react';

function App() { 

  const [videos, setVideos] = useState(videosData);

  function addVideo () {
    setVideos( [
        ...videos,
        {
          key: videos.length,
          title: 'Javascript js tutorial',
          channel: 'Codeforce',
          views: '2M',
          time: '2 year ago',
          image:
            'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
          verified: true,
        },
      ])
  }

 return (
   <>
     <div>
       <button onClick={addVideo}>Add Video</button>
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

       <div>
         <Counter />
       </div>
     </div>
   </>
 );
}

export default App;
