import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [message, setMessage] = useState('Press 👆');


  const fetchFromBackend = () => {
    fetch('http://localhost:3001/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }

  return (
    <>
      <h1>Hi this is frontend</h1>
      <div className="card">
        <button onClick={fetchFromBackend}>
          Fetch from backend 
        </button>
        <h2>
          {message}
        </h2>
      </div>
      <p className="read-the-docs">
        😀
      </p>
    </>
  )
}

export default App
