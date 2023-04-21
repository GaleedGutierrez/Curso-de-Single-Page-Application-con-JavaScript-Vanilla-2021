import getData from '../utils/getData';
import getHash from '../utils/getHash';
import { IDataCharacter } from '../utils/interface';

const character = async (): Promise<string> => {
	const ID = getHash();
	const CHARACTER = (await getData(ID)) as IDataCharacter;
	const { image, name, episode, status, species, gender, origin, location } =
		CHARACTER;

	const CHARACTERISTICS = `
		<h5>Episodes: <span class="a-lead-characteristics">${episode.length}</span></h5>
		<h5>Status: <span class="a-lead-characteristics">${status}</span></h5>
		<h5>Species: <span class="a-lead-characteristics">${species}</span></h5>
		<h5>Gender: <span class="a-lead-characteristics">${gender}</span></h5>
		<h5>Origin: <span class="a-lead-characteristics">${origin.name}</span></h5>
		<h5>Last Location: <span class="a-lead-characteristics">${location.name}</span></h5>
	`;
	const VIEW = `
		<section class="g-main__character-details">
			<article class="m-card-details">
				<figures>
					<img src="${image}" alt="${name}" class="m-card-details__img" />
				</figures>
				<section class="m-card-details__info-container">
					<h2 class="m-card-details__name">${name}</h2>
					<article class="m-card-details__data-container">
						${CHARACTERISTICS}
					</article>
				</section>
			</article>
		</section>
	`;

	return VIEW;
};

export default character;
