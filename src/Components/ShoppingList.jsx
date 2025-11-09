import React from 'react'
import { plantList } from '../Data/PlantList'



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
		<ul>
			{plantList.map((plant) => (
				<li key={plant.id}>{plant.isBestSale ? <span>{plant.name} 🔥</span> : null}</li>
			))}
		</ul>
    </div>
  )
}

export default ShoppingList