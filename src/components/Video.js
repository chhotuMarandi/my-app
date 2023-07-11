import './Video.css'


function Video({ title, channel, time, views,verified,id,children}) {


  return (
    <>
      <div className='video-card'>
        <div className='thumnail-img'>
          <img
            src={`https://picsum.photos/id/${id}/300/150`}
            className='thumbnail'
            alt=''
          />
          <div>
            {children} 
          </div>
        </div>

        <section className='details-section'>
          <img
            src={`https://picsum.photos/id/${id}/200/300?grayscale&blur=2`}
            className='profile'
            alt=''
          />

          <div className='details'>
            <p className='title'>{title} </p>
            <p className='channel'>
              {channel}
              {verified && '✅'}
            </p>
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