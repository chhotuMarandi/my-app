import './AddVideo.css'
import {useState} from 'react'

function AddVideo({addVideos}) {

  const intialVideo = {
    channel: 'Codeforce',
    time: '2 year ago',
    title: '',
    views: '',
    image:
      'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
    verified: true,
  };

 const [video, setVideo] = useState(intialVideo);

function submitHandler(e) {
  e.preventDefault();
  addVideos(video);
  setVideo(intialVideo);
    // console.log(video)
}

function handleChange(e) {
  // console.log(e.target.name, e.target.value);
  setVideo({...video,
     [e.target.name]: e.target.value,
  })
}


 
 return (
   <form>
     <input
       type='text'
       name='title'
       onChange={handleChange}
       placeholder='title'
       value={video.title}
     />
     <input
       type='text'
       name='views'
       onChange={handleChange}
       placeholder='views'
      value={video.views}
     />
     <button onClick={submitHandler}>Add Video</button>
   </form>
 );
}

export default AddVideo