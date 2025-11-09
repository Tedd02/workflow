import React from 'react'
import { plantList } from '../Data/PlantList'
import PlantItem from './PlantItem'



function ShoppingList() {
    // Get unique categories from plantList
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

  return (
    <div>
        <ul>
			{categories.map((cat) => (
				<li key={cat}>{cat}</li>
			))}
		</ul>
		<ul class='list-none p-8 flex flex-wrap max-w-[800px]'>
			{plantList.map(({ id, cover, name, water, light }) => (
                <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                />
			))}
		</ul>
    </div>
  )
}

export default ShoppingList