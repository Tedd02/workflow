import React from 'react'
import CareScale from './CareScale'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light }) {
  return (
    <li onClick={() => handleClick(name)} class='m-2.5 flex flex-col justify-center items-start capitalize'>
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