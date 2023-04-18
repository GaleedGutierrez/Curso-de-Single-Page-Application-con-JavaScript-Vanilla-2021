import { IDataCharacter, IRickAndMortyApi } from './interface';

const API = 'https://rickandmortyapi.com/api/character';

const getData = async (id?: string) => {
	const API_URL = id ? `${API}/${id}` : API;

	try {
		const RESPONSE = await fetch(API_URL);
		const DATA = id
			? ((await RESPONSE.json()) as IRickAndMortyApi)
			: ((await RESPONSE.json()) as IDataCharacter);

		return DATA;
	} catch (error) {
		console.log('Fetch Error: ', error);

		return;
	}
};

export default getData;
