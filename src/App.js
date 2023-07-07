import './App.css'
import Video from './components/Video'
import videoData from './data/videoData'


function App(){

  return (
    <div className='App'>

     {videoData.map((video)=>{
         return (
           <Video
             title={video.title}
             channel={video.channel}
             views={video.views}
             time={video.time}
             thumbnailImg={video.thumbnailImg}
             profileImg={video.profileImg}
             key={video.id}
             verified={video.verified}
           ></Video>
         );
     })}
    </div>
  );
}

export default App