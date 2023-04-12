import getData from '../utils/getData';
import { IDataCharacter } from '../utils/interface';

const home = async () => {
	const CHARACTERS_API = await getData();
	const CHARACTERS = CHARACTERS_API?.results;

	if (!CHARACTERS) return;

	const CHARACTERS_HTML = CHARACTERS.map((character) => setCharacters(character));
	const VIEW = `
		<div class="main__characters">
			${CHARACTERS_HTML.join('')}
		</div>
	`;

	return VIEW;
};

const setCharacters = (character: IDataCharacter) => {
	const { id, image, name } = character;
	const RESULT = `
		<article class="characters__item">
			<a href="#/${id}/">
				<img src="${image}" alt="${name}"/>
				<h2>${name}</h2>
			</a>
		</article>
	`;

	return RESULT;
};

export default home;
