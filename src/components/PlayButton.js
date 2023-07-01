import './PlayButton.css'

function PlayButton({ onPlay, onPause }) {
 let isPlaying = false;
  function eventHandler() {

    if(isPlaying) {
      onPause();
    } else {
     onPlay();
    }

    isPlaying = !isPlaying
  }

  return (
    <div className='playBtn'>
      <button onClick={eventHandler}>play</button>
    </div>
  );
}

export default PlayButton