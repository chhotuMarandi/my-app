import './Video.css'

function Video ({title, channel, views, time}) {

// console.log(props)

  return (
    <>
      <div className='thumbnail'>
        <img src='https://picsum.photos/640/360' alt='' width={400} />
      </div>

      <p className='title'>{title}</p>
      <p className='channel'>{channel}</p>
      <div className='discription'>
        {views} views <span>•</span> {time}
      </div>
    </>
  );
}



export default Video 