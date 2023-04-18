import getData from '../utils/getData';
import getHash from '../utils/getHash';
import { IDataCharacter } from '../utils/interface';

const character = async (): Promise<string> => {
	const ID = getHash();
	const CHARACTER = (await getData(ID)) as IDataCharacter;
	const { image, name, episode, status, species, gender, origin, location } =
		CHARACTER;

	const CHARACTERISTICS = `
		<h3>Episodes: <span>${episode.length}</span></h3>
		<h3>Status: <span>${status}</span></h3>
		<h3>Species: <span>${species}</span></h3>
		<h3>Gender: <span>${gender}</span></h3>
		<h3>Origin: <span>${origin.name}</span></h3>
		<h3>Last Location: <span>${location.name}</span></h3>
	`;
	const VIEW = `
		<div class="characters-inner">
			<article class="character-card">
				<img src="${image}" alt="${name}"/>
				<h2>${name}</h2>
			</article>
			<article class="characters-card">
				${CHARACTERISTICS}
			</article>
		</div>
	`;

	return VIEW;
};

export default character;
