const themeButton = document.querySelector('#darkMode');
const body = document.body;

themeButton.addEventListener('click', () => {
    if (!body.classList.contains('darkmode')){
        body.classList.add('darkmode');
    } else {
        body.classList.remove('darkmode');
    }
})