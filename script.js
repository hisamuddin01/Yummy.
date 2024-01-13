const navOpenBtn = document.querySelector('.nav-open');
const navCloseBtn = document.querySelector('.nav-close');
const linksContainer = document.querySelector('.links-container');


navOpenBtn.addEventListener('click', ()=> {
    linksContainer.classList.add('show-links')
})
navCloseBtn.addEventListener('click', ()=> {
    linksContainer.classList.remove('show-links')
})
