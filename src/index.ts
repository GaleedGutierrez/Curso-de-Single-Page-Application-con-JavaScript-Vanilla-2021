import './styles/styles.scss';
import './styles/tablets.scss';

import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
