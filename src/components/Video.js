import './Video.css'
import PlayButton from './PlayButton';

function Video ({title, channel, views, time,image,verified}) {


  return (
    <>
      <div className='video-card'>
        <div className='thumbnail'>
          <img src={image} alt='' width={400} />
        </div>

        <p className='title'>{title}</p>
        <p className='channel'>
          {channel} {verified && '✅'}
        </p>
        <div className='discription'>
          {views} views <span>•</span> {time}
        </div>
      <PlayButton onPlay={()=>console.log('playing')} onPause={()=>console.log('paused')}/>
      </div>
    </>
  );
}



export default Video 