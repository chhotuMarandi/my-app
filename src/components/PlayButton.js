import './PlayButton.css'
import { useState } from 'react';

function PlayButton({ onPlay, onPause,children }) {
 const [isPlaying, setIsPlaying] = useState(false);
  function eventHandler(event) {
    event.stopPropagation();

    if(isPlaying) {
      onPause();
    } else {
     onPlay();
    }

    setIsPlaying (!isPlaying)
  }

  return (
    <div className='playBtn'>
      <button onClick={eventHandler}>
        {children} : {isPlaying ? '▶️' : '⏸️'}
      </button>
      
    </div>
  );
}

export default PlayButton