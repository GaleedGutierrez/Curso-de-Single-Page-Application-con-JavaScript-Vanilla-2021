import { IRickAndMortyApi } from './interface';

const API = 'https://rickandmortyapi.com/api/character';

const getData = async (id?: string): Promise<IRickAndMortyApi | undefined> => {
	const API_URL = (id)
		? `${API}/${id}`
		: API;

	try {
		const RESPONSE = await fetch(API_URL);
		const DATA: IRickAndMortyApi = await RESPONSE.json();

		return DATA;
	} catch (error) {
		console.log('Fetch Error: ', error);

		return;
	}
};

export default getData;
