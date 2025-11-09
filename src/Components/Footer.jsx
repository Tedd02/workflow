import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer class='text-black font-medium p-8 border-t-[3px] border-solid flex flex-col justify-start items-center'>
			<div class='mb-2.5'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div class='mb-2.5'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer