import './Video.css'

function Video () {
 let topic = 'English'
 let bg = 'dark'
  return (
    <>
      <img
        src='https://picsum.photos/640/360'
        alt=''
        width={400}
      />
      <p className={bg}>{topic} Music Video || 2023</p>
    </>
  );
}



export default Video 