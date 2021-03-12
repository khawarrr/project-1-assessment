let totalEl;

const resultEl = document.querySelector('h1 span');


const inputEl = document.querySelector('#content');



const plusEl = document.querySelector('#plus');
const minusEl = document.querySelector('#minus');




plusEl.addEventListener('click', handleClickPlus);

minusEl.addEventListener('click', handleClickMinus)


init();

function init() {
    totalEl = 0;
    render();
}


function render() {
    if (totalEl >= 0) {
        resultEl.textContent = totalEl;
    } else {
        resultEl.textContent = totalEl;

        resultEl.style.color = "red"
    }
    
}


function handleClickPlus() {
    let inputVal = parseInt(inputEl.value);
    totalEl += inputVal;
    render()
    
}


function handleClickMinus() {
    let inputVal = parseInt(inputEl.value);
    totalEl -= inputVal;
    render()
}



