import './App.css'
import Video from './components/Video'
import videoData from './data/videoData';
import PlayButton from './components/PlayButton';
import { useState } from 'react';


function App(){



  const [videoCard, setVideoCard] = useState(videoData);

  // const initialData = {
  //   id: {id:videoCard.length + 1},
  //   title: 'Node js Tutorial',
  //   channel: 'Coding addict',
  //   views: '128k',
  //   time: '3 year ago',
  //   verified: true,
  // };

  function addVideo(){
    setVideoCard([
      ...videoCard,
      {
        id: videoCard.length + 1 ,
          title: 'Node js Tutorial',
          channel: 'Coding addict',
          views: '128k',
          time: '3 year ago',
          verified: true,
      },
    ]);
    console.log(videoCard);
  }


  return (
    <>
      <div className='input-field'>
        <input type='text' placeholder='title' />
        <input type='text' placeholder='views' />
        <button onClick={addVideo}>Add Video</button>
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