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
		<ul class='list-none p-8 flex flex-wrap max-w-[800px]'>
			{plantList.map((plant) => (
				<li key={plant.id} class="border-2 border-solid rounded-xl m-2.5 h-[150px] w-[150px] flex flex-col justify-center items-center relative">
                    {plant.name}
					{plant.isSpecialOffer && <div class='absolute right-0 top-2.5 py-1 px-2.5 font-medium text-white bg-[#31b572]'>Soldes</div>}
                </li>
			))}
		</ul>
    </div>
  )
}

export default ShoppingList