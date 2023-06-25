import './App.css'
import Video from './components/Video'

function App() { 

  let obj = {
    title:'React js tutorial' ,
      channel:'Coding addict',
      views:'128k',
      time:'8 month ago',
      image: 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124',
      verified: 'true'
  }

 return (
   <div className='App'>
     <Video {...obj} />
     <Video
       title='Node js tutorial'
       channel='Coding addict'
       views='1M'
       time='1 year ago'
       image='https://webmantra.net/BlogImages/advantages-of-nodejs.jpg'
       verified={false}
     />
     <Video
       title='javascript js tutorial'
       channel='Coding addict'
       views='2M'
       time='2 year ago'
       image='https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg'
       verified={true}
     />
   </div>
 );
}

export default App;
