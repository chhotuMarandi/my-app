import './App.css'
import Video from './components/Video'

function App() { 

  let videos = [
    {
      title: 'React js tutorial',
      channel: 'Coding addict',
      views: '128k',
      time: '8 month ago',
      image:
        'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124',
      verified: true,
    },
    {
      title: 'Node js tutorial',
      channel: 'programming Yt',
      views: '1M',
      time: '1 year ago',
      image:
        'https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png',
      verified: true,
    },
    {
      title: 'Javascript js tutorial',
      channel: 'Codeforce',
      views: '2M',
      time: '2 year ago',
      image:
        'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
      verified: false,
    },
  ];

 return (
   <div className='App'>
     {
      videos.map((video)=>{
       return (
         <Video
           title={video.title}
           channel={video.channel}
           views={video.views}
           time={video.time}
           image={video.image}
           verified={false}
         />
       )
      })
     }
     
   </div>
 );
}

export default App;
