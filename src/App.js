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
          </Video>
        );
      })}
      <PlayButton  message='playing'>Play</PlayButton>
      <PlayButton  message='paused'>Pause</PlayButton>
    </div>
  );
}

export default App