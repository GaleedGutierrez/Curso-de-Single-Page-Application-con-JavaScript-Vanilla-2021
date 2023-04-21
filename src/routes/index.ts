import character from '../pages/Character';
import error404 from '../pages/Error404';
import home from '../pages/Home';
import header from '../templates/Header';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const $ = (selector: string) => document.querySelector(selector);

const ROUTES = {
	'/': home,
	'/:id': character,
	// '/contact' : 'Contact'
};

const router = async (): Promise<void> => {
	const HEADER = $('#header') as HTMLElement;
	const CONTENT = $('#main__content') as HTMLElement;
	const HASH = getHash();
	const ROUTE = resolveRoutes(HASH);
	const render = ROUTES[ROUTE as keyof typeof ROUTES]
		? ROUTES[ROUTE as keyof typeof ROUTES]
		: error404;

	HEADER.innerHTML = header();
	CONTENT.innerHTML = (await render()) ?? error404();
};

export default router;
