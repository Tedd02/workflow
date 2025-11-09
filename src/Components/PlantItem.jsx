import React from 'react'
import CareScale from './CareScale'

function PlantItem({ id, cover, name, water, light }) {
  return (
    <li key={id} class='m-2.5 flex flex-col justify-center items-start capitalize'>
        <img class='rounded-[20px] h-[220px] w-[220px]' src={cover} alt={`${name} cover`} />
        {name}
        <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    </li>
  )
}

export default PlantItem