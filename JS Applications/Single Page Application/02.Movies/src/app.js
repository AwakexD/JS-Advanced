import { router } from './router.js';

router('/');

const navigationElement = document.querySelector('.navbar');
navigationElement.addEventListener('click',  (event) => {
    event.preventDefault();
    if (event.target.tagName == 'A') {
        let url = new URL(event.target.href);
        
        router(url.pathname);
    }
}) 