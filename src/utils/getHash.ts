const getHash = (): string => {
	const HASH = location.hash
		.slice(1)
		.toLocaleLowerCase()
		.split('/');

	return HASH[1] ?? '/';
};

export default getHash;
