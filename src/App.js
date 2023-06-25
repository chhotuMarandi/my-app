import './App.css'
import Video from './components/Video'
import videos from './data/data'

function App() { 


 return (
   <div className='App'>
     {
      videos.map((video)=>{
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
       )
      })
     }
     
   </div>
 );
}

export default App;
