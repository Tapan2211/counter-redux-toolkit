import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Counter : {count}</h1>
        <button className='button' onClick={() => dispatch(increment())}>Increment</button>
        <button className='button' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='button' onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Tapan
        </a>
      </header>
    </div>
  );
}

export default App;
