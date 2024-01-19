import { useState } from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { FaBeer } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

function App() {
  return (
    <IconContext.Provider value={{ color: 'green', size: '5rem' }}>
      {' '}
      Lets go for a <FaBeer />? <AiFillFacebook />
      <BsFacebook color='red' />
    </IconContext.Provider>
  )
}

export default App
