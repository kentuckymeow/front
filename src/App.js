
import './App.css';

const App = () => {

    const handleClick = () => alert('say gav');
  return (
    <div className="App">
        <input type = 'text' placeholder='login'/>
        <input type = 'password' placeholder='password' />

      <button onClick = {handleClick} >
           click me
      </button>
    </div>
  );
}

export default App;
