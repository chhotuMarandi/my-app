import './App.css'
import Video from './components/Video'
import videoData from './data/videoData'
import PlayButton from './components/PlayButton';


function App(){

  return (
    <div className='App'>
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
              onPlay={() => console.log('playing')}
              onPause={() => console.log('paused')}
              message='playing'
            >
              Play
            </PlayButton>
          </Video>
        );
      })}
      
    </div>
  );
}

export default App