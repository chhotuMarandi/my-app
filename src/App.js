import './App.css'
import PlayButton from './components/PlayButton';
import Video from './components/Video'
import videos from './data/data'

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
         />
       );
     })}

     <div>
       <PlayButton
         onPlay={() => console.log('play')}
         onPause={() => console.log('pause')}
       >
         play
       </PlayButton>
     </div>
   </div>
 );
}

export default App;
