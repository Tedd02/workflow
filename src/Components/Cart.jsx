import { useState } from 'react'

function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div class='text-white bg-[#31b572] p-8 w-[200px] flex flex-col justify-start'>
			<button
				class='bg-none outline-none border-none font-semibold cursor-pointer self-start p-0 text-white'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2 class='text-3xl py-2'>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)} class='my-2 p-1 border text-black bg-gray-200'>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div class='p-8 w-[200px] [&>button]:text-black'>
			<button
				class='bg-none outline-none border-none font-semibold cursor-pointer self-start p-0 text-white'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart