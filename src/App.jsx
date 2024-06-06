import { useState, useEffect } from 'react'
import Sprite from './sprite/Sprite'
import Search from './search/Search'
import Card from './card/Card'
// import './App.css'

function App() {
  const [users, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <Sprite/>
      <Search setData={setData} />
      {
        users.map( (item, index) => 
          <Card user={item} key={`user-card-${index}`} />
        )
      }
    </>
  )
}

export default App
