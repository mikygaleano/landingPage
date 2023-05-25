

function modeDark () {
    const body = document.querySelector('body');
    const btn = document.querySelector('.btn-dark');

    function toggleClass () {

        if (btn.textContent === '🌚') {
            btn.textContent = '🌞';
            btn.style.background = 'yellow'
            body.classList.add('dark')
        }
         else {
            btn.textContent = '🌚';
            btn.style.background = 'black'
            body.classList.remove('dark')
        }
    };

    btn.addEventListener('click', toggleClass)
};


document.addEventListener('DOMContentLoaded', ()=> {
    modeDark();
});