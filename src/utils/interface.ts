export enum ESpecies {
	Alien = 'Alien',
	Human = 'Human',
}

export enum EStatus {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown',
}

export enum EGender {
	Female = 'Female',
	Male = 'Male',
	Unknown = 'unknown',
}

export interface ILocation {
	name: string;
	url: string;
}


export interface IDataCharacter {
	id: number;
	name: string;
	status: EStatus;
	species: ESpecies;
	type: string;
	gender: EGender;
	origin: ILocation;
	location: ILocation;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface IInfo {
	count: number;
	pages: number;
	next: string;
	prev: null;
}

export interface IRickAndMortyApi {
	info: IInfo;
	results: IDataCharacter[];
}
