import './App.css'
import Video from './components/Video'
import videoData from './data/videoData'
import PlayButton from './components/PlayButton';


function App(){

  return (
    <div className='App' onClick={()=>console.log('app')}>
      {videoData.map((video) => {
        return (
          <Video
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            thumbnailImg={video.thumbnailImg}
            profileImg={video.profileImg}
            id={video.id}
            key={video.id}
            verified={video.verified}
          >
            <PlayButton
              onPlay={() => console.log('playing', video.title)}
              onPause={() => console.log('paused', video.title)}
              message='playing'
            >
              {/* {video.title} */}
            </PlayButton>
          </Video>
        );
      })}
      
    </div>
  );
}

export default App