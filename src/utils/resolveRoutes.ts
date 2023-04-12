const resolveRoutes = (route: string) => {
	if (route.length <= 3) {
		const VALID_ROUTE = (route === '/')
			? route
			: '/:id';

		return VALID_ROUTE;
	}

	return `/${route}`;
};

export default resolveRoutes;
