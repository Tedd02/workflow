

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div class='text-center pt-8'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				class='mr-3.5'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories