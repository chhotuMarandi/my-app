function PlayButton({ children, onPause, onPlay }) {
 let playing = false;
  function clickHandler() {

   if(playing){
    onPause();
   } else {
     onPlay();
   }

   playing = !playing
   // console.log(playing)

  }

  return (
    <>
      <button onClick={clickHandler}>{children}</button>
    </>
  );
}

export default PlayButton