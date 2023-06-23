import './App.css';

let firstName = 'chhotu';
let className = 'App-header';

function App() {
  console.log('App');
  return (
    <div className='App'>
      <div className={className}>{firstName}</div>
      <Demo />
    </div>
  );
}

function Demo() {
  console.log('Demo');
  return (
    <div className='App'>
      <div className='App-header'>Demo</div>
    </div>
  );
}

export default App;
