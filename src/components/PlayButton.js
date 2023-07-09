import { useState } from "react";

function PlayButton({ children, onPause, onPlay }) {

  const [playing, setPlay] = useState(false);


//  let playing = false;
  function clickHandler(e) {
   e.stopPropagation();

   if(playing){
    onPause();
   } else {
     onPlay();
   }

   setPlay (!playing)

  }

  return (
    <>
      <button className='play' onClick={clickHandler}>
        {children} {playing ? '⏸️' : '▶️'}
      </button>
    </>
  );
}

export default PlayButton