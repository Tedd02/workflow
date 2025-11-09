import React from 'react'
import logo from '../assets/logo.png'

const Banner = () => {
  return (
    <div class='text-black textalign-right p-8 border-b flex flex-row justify-end-safe items-center'>
        <img src={logo} alt="La maison jungle logo" class="h-[45px] w-[45px]"/>
        <h1 class= "p-8">La maison jungle</h1>
    </div>
  )
}

export default Banner