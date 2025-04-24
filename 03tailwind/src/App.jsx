import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
const[card,setCard]=useState()
  return (
    <>
<div className="m-0 p-0 overflow-hidden bg-white">
<div className="w-screen h-screen flex gap-16 overflow-hidden bg-white">
<Card useName="Read this content"/ >
<Card useName=" Full Detail"/>
<Card useName="Tearms & Condition"/>
</div>
</div>
    </> 
  )
}

export default App
