import './PlayButton.css'

function PlayButton({ children, onPlay, onPause }) {
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
      <button onClick={eventHandler}>{children}</button>
    </div>
  );
}

export default PlayButton