import React from 'react'
import { useState } from 'react'
import { plantList } from '../Data/PlantList'
import PlantItem from './PlantItem'
import Categories from './Categories'




function ShoppingList({ cart, updateCart }) {
    // Get unique categories from plantList
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

  function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

  return (
    <div class='w-full p-5'>
        <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
		<ul class='list-none p-8 grid grid-cols-4'>
			{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
		</ul>
    </div>
  )
}

export default ShoppingList