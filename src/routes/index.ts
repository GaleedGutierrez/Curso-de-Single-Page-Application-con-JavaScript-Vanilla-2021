import header from '../templates/Header';
// import home from '../pages/Home';
// import character from '../pages/Character';
// import error404 from '../pages/Error404';
// import getHash from '../utils/getHash';
// import resolveRoutes from '../utils/resolveRoutes';

// const ROUTES = {
// 	'/'        : home,
// 	'/:id'     : character,
// 	'/contact' : 'Contact'
// };

const router = (): void => {
	const HEADER = document.getElementById('header') as HTMLElement;
	// const CONTENT = document.getElementById('content') as HTMLElement;

	HEADER.innerHTML = header();
};

export default router;
