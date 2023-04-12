const Character = (): string => {
	const VIEW = `
	<div class="characters-inner">
		<article class="character-card">
			<img src="image" alt="name"/>
			<h2>Name</h2>
		</article>
		<article class="characters-card">
			<h3>Episodes:</h3>
			<h3>Status:</h3>
			<h3>Species:</h3>
			<h3>Gender:</h3>
			<h3>Origin:</h3>
			<h3>Last Location:</h3>
		</article>
	</div>
	`;

	return VIEW;
};

export default Character;
