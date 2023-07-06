import './App.css'

function App(){
  return (
    <div className="video-card">
      <img
        src='https://loremflickr.com/320/240/random'
        className='thumbnail'
        alt=''
      />
      <section className='details-section'>
        <img
          src='https://loremflickr.com/40/40/people'
          className='profile'
          alt=''
        />

        <div className='details'>
          <p className='title'>React Js Tutorial and javascript</p>
          <p className='channel'>Coder Dost</p>
          <div className="views-time">
            <p className='views'>6M views</p>
            <p >•</p>
            <p className='time'>5 month ago</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App