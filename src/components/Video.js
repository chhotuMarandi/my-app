import './Video.css'

function Video({ title, channel, time, views, thumbnailImg, profileImg }) {
  return (
    <>
      <div className='video-card'>
        <img src={thumbnailImg} className='thumbnail' alt='' />
        <section className='details-section'>
          <img src={profileImg} className='profile' alt='' />

          <div className='details'>
            <p className='title'>{title} </p>
            <p className='channel'>{channel}</p>
            <div className='views-time'>
              <p className='views'>{views}</p>
              <p>•</p>
              <p className='time'>{time}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Video