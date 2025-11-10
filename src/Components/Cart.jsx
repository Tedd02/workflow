import { useState } from 'react'

function Cart({ cart, updateCart }) {
	//const monsteraPrice = 8
	//const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	return isOpen ? (
		<div class='text-white bg-[#31b572] p-8 w-[250px] flex flex-col justify-start'>
			<button
				class='bg-none outline-none border-none font-semibold cursor-pointer self-start p-0 text-white'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
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