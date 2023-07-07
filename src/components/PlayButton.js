function PlayButton() {

    function clickHandler(){
      console.log('playing')
    }

  return (
    <>
      <button onClick={clickHandler} className='play'>
        play
      </button>
    </>
  );
}

export default PlayButton;