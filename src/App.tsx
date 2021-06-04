import React from 'react'
import './App.scss'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className='app'>
      <h1>{process.env.API_HOST}</h1>
      <span>{`Hello! I'm ${name}, ${age} yearssss old.`}</span>
    </div>
  )
}

export default App
