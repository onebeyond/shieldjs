import fetch from 'cross-fetch';
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from './components/Button';

type User = {
  id: number;
  name: string;
  username: string;
}

const fetchUser = async (): Promise<User> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const json: User  = await res.json();
  return json;
}

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetchUser().then(user => setUser(user));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button primary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <span>{user?.username}</span>
    </div>
  )
}

export default App
