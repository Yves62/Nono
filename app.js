const btn = document.querySelector('.btn-toggle');
const nav = document.querySelector('.nav-menu'); // on choisit le ul ici avec la classe .nav-menu 

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

