import { useState } from 'react'
import './App.css'
import HeaderNav from './Components/HeaderNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <HeaderNav />
        </header>
      </main>
    </>
  )
}


export default App
