import React from 'react'
import CareScale from './CareScale'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
  return (
    <li onClick={() => handleClick(name)} class='relative m-2.5 flex flex-col justify-center items-start capitalize'>
        <span className='absolute rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-none bg-[#31b472] text-white p-3.5 right-4 top-0 font-medium'>{price}€</span>
        <img class='rounded-[20px] h-[200px] w-[200px] object-cover' src={cover} alt={`${name} cover`} />
        {name}
        <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    </li>
  )
}

export default PlantItem