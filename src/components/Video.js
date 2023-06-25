import './Video.css'

function Video ({title, channel, views, time,image,verified}) {

  if (verified) {
    verified = <p className='channel'>{channel} ✅</p>;
  } else {
    verified = <p className='channel'>{channel}</p>;
  }


  return (
    <div className='video-card'>
      <div className='thumbnail'>
        <img src={image} alt='' width={400} />
      </div>

      <p className='title'>{title}</p>
      {verified}
      <div className='discription'>
        {views} views <span>•</span> {time}
      </div>
    </div>
  );
}



export default Video 