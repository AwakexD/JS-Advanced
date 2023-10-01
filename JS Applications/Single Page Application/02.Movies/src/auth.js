const guestNavigation = document.querySelectorAll('li.nav-item.guest');
const userNavigation = document.querySelectorAll('li.nav-item.user');

export function updateAuth() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        userNavigation.forEach(li => {li.style.display = 'block'});
        guestNavigation.forEach(li => {li.style.display = 'none'});
    } else {
        userNavigation.forEach(li => {li.style.display = 'none'});
        guestNavigation.forEach(li => {li.style.display = 'block'});
    }
} 

