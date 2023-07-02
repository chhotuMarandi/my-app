import './App.css'
import PlayButton from './components/PlayButton';
import Video from './components/Video'
import videos from './data/data'
import Counter from './components/Counter';

function App() { 


 return (
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
     <Counter/>

     </div>
   </div>
 );
}

export default App;
