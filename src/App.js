import './App.css'
import Video from './components/Video'
import videoData from './data/videoData';
import PlayButton from './components/PlayButton';
import { useState } from 'react';
import AddVideo from './components/AddVideo';


function App(){

  const [videoCard, setVideoCard] = useState(videoData);


  // const initialData = {
  //   id: videoCard.length + 1,
  //   title: 'Node js Tutorial',
  //   channel: 'Coding addict',
  //   views: '128k',
  //   time: '3 year ago',
  //   verified: true,
  // };

  function addVideos(video){
    setVideoCard([...videoCard, { ...video, id: videoCard.length + 1 }]);
  }


  return (
    <>
      <div className='input-field'>
        <AddVideo setVideos={addVideos} />
      </div>
      <div className='App'>
        {videoCard.map((video) => {
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
              >
                {/* {video.title} */}
              </PlayButton>
            </Video>
          );
        })}
      </div>
    </>
  );
}

export default App