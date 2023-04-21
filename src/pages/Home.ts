import getData from '../utils/getData';
import { IDataCharacter, IRickAndMortyApi } from '../utils/interface';

const setCharacters = (character: IDataCharacter) => {
	const { id, image, name } = character;
	const RESULT = `
		<article class="m-card m-card--primary">
			<a href="#/${id}/" class="m-card__link-container m-card--primary__link-container">
				<figure>
					<img src="${image}" alt="${name}" class="m-card__img" />
				</figure>
				<div class="m-card__character-name-container m-card--primary__character-name-container">
					<h2 class="m-card__character-name m-card--primary__character-name">${name}</h2>
				</div>
			</a>
		</article>
	`;

	return RESULT;
};

const home = async () => {
	const CHARACTERS_API = (await getData()) as IRickAndMortyApi;
	const CHARACTERS = CHARACTERS_API?.results;

	if (!CHARACTERS) return;

	const CHARACTERS_HTML = CHARACTERS.map((character) =>
		setCharacters(character)
	);
	const VIEW = `
		<section class="g-main__characters">
			${CHARACTERS_HTML.join('')}
		</section>
	`;

	return VIEW;
};

export default home;
