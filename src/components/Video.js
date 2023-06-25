import './Video.css'

function Video ({title, channel, views, time,image,verified}) {


  return (
    <div className='video-card'>
      <div className='thumbnail'>
        <img src={image} alt='' width={400} />
      </div>

      <p className='title'>{title}</p>
      <p className='channel'>{channel} {verified ? '✅' : null}</p>;
      <div className='discription'>
        {views} views <span>•</span> {time}
      </div>
    </div>
  );
}



export default Video 