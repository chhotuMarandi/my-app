import Video from './components/Video'

function App() { 

  let obj = {
    title:'React js tutorial' ,
      channel:'Coding addict',
      views:'128k',
      time:'8 month ago'
  }

 return (
  <div>
    <h1>Hello</h1>
    <Video {...obj}/>
  </div>
 )
}

export default App;
