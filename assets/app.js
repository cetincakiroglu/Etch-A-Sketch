const mainContainer = document.querySelector('#main-container');
const reset = document.getElementById('reset_btn');
let newGrid;
let userInput;

function getUserInput (){
    userInput = prompt('Enter a number: ', );

    createGrid(userInput);
}
getUserInput();


function createGrid(userInput){
   

    let rows = userInput;
    let cols = userInput;
    mainContainer.style.setProperty('--grid-rows',rows);
    mainContainer.style.setProperty('--grid-cols', cols);

    for(let i = 0; i <(rows * cols); i++){
        newGrid = document.createElement('div');
        newGrid.setAttribute('id','innerGrid');
        newGrid.classList.add('grid');
        newGrid.style.cssText = `width: ${700/userInput}px height: ${700/userInput}px`;
        mainContainer.appendChild(newGrid);
        
    }
 
}

function changeColor(event){
    let square = event.target;
    square.setAttribute('class','color');
}

function reload(){
    window.location.reload();
}
mainContainer.addEventListener('mousemove', changeColor);
reset.addEventListener('click',reload);




// for(let i = 0; i < square.length; i++){

//     square[i].addEventListener('mouseover',changeColor); 
//     if(e.target.value === newGrid || MouseEvent.clientY === 'div' ){
//         square[i].className = 'color';
//         }
// }



// square.addEventListener('mouseover', changeColor);

// const square = document.querySelectorAll('.grid');
// square.addEventListener('mouseover',insertClass)



// square.addEventListener('mouseover',function(event){
//     if(event.target.className === 'grid'){
//         square.className.add('.grid-eventOn');
//         }
// });

// const square = document.querySelectorAll('.grid');
// square.addEventListener('mouseover',insertClass);

// //userInput --> mouse movement. clientX & clientY
// function insertClass(e){
//     square.className += 'grid-eventOn';
// }
