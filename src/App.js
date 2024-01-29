import './App.css';
import { MagicBall } from './components/MagicBall/MagicBall';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
  let [answer, setAnswer] = useState('');
  let [pending, setPending] = useState(false);
  let URL = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 20)}`;

  useEffect(() => {
    if(pending) {
    fetch(URL)
      .then(respose => respose.json())
      .then((data) => {
        setPending(false)
        setAnswer(data.title)
      })
    }
  }, [pending])

  const handleClick = () => {
    setPending(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <MagicBall answer={ answer } />
        <Button onClick={handleClick}>Получить предсказание</Button>
      </header>
    </div>
  );
}

export default App;
