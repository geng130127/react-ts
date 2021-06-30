import React from 'react'
import './App.scss'
import util from 'Utils/index'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  const sum: number = util.add(1, 2)
  return (
    <div className='app'>
      <h1>
        {process.env.API_HOST} {sum}
      </h1>
      <span>{`Hello! I'm ${name}, ${age} yearssss old.`}</span>
    </div>
  )
}

export default App
