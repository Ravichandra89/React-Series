import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-5 rounded-md'>Vite with React</h1>
      <Card username="Ravi" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" post="Cloud Engineer"/>
      <Card username="Aruna" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww" post="Solution Architect"/>

      <Card src="https://media.istockphoto.com/id/693275072/photo/the-next-best-triumph-could-be-around-the-corner.jpg?s=2048x2048&w=is&k=20&c=60e7eZswlESory6KwZ5NZerv2OkXVk40rICqwPIiUAU="/>
      {/* <h1 className='text-3xl bg-green-500 p-5 rounded-md'>React with Vite</h1> */}
    </>
  )
}

export default App
