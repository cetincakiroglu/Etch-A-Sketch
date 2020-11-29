const mainContainer = document.querySelector('#main-container');
const reset = document.getElementById('reset_btn');
let newGrid;
let userInput;

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', getUserInput);

function getUserInput() {
    userInput = Number(document.getElementById('userInput').value);
    closeModal();
    createGrid(userInput);
}

const modal = document.getElementById('popUp__modal');

function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {

    if (e.target == modal) {
        modal.style.display = 'none';
    }

}

function createGrid(userInput) {

    let rows = userInput;
    let cols = userInput;
    mainContainer.style.setProperty('--grid-rows', rows);
    mainContainer.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {

        newGrid = document.createElement('div');
        newGrid.setAttribute('id', 'innerGrid');
        newGrid.classList.add('grid');
        newGrid.style.cssText = `width: ${700/userInput}px height: ${700/userInput}px`;
        mainContainer.appendChild(newGrid);

    }

}

reset.addEventListener('click', reload);

function reload() {

    window.location.reload();

}

mainContainer.addEventListener('click', startPainting);
mainContainer.addEventListener('dblclick', stopPainting);

function startPainting(event) {

    mainContainer.addEventListener('mouseover', changeColor);
}

function stopPainting(event) {

    mainContainer.removeEventListener('mouseover', changeColor);
    let square = event.target;
    square.classList.add('stopPainting');

}

function changeColor(event) {

    let square = event.target;
    square.classList.add('color');

}