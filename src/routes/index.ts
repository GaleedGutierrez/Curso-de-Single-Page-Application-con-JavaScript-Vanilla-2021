import header from '../templates/Header';
import home from '../pages/Home';
import character from '../pages/Character';
import error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const ROUTES = {
	'/'    : home,
	'/:id' : character,
	// '/contact' : 'Contact'
};

const router = (): void => {
	const HEADER = document.getElementById('header') as HTMLElement;
	const CONTENT = document.getElementById('main__content') as HTMLElement;
	const HASH = getHash();
	const ROUTE = resolveRoutes(HASH);
	const render = (ROUTES[ROUTE as keyof typeof ROUTES])
		? ROUTES[ROUTE as keyof typeof ROUTES]
		: error404;

	HEADER.innerHTML = header();
	CONTENT.innerHTML = render();

};

export default router;
