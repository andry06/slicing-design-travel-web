import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <h1 className="text-3xl font-bold underline text-orange">
          Hello world!
        </h1>
        <p className='font-inter text-pink'>
            Contoh
        </p>
        <span className='text-ungu'>
            Halo adalah span
        </span>
    </div>
  )
}

export default Home