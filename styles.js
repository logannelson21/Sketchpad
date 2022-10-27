/* 16x16 divs */
const container = document.querySelector('#container');
const grid = {rows:16 , columns:16};
const total = grid.rows * grid.columns;

createGrid(total);

function createGrid(total) {
    for( let i = 0; i < total; i++){
        const element = document.createElement('div');
        container.appendChild(element);
        element.textContent = `${i+1}`;
        element.classList.add('box');
        element.addEventListener('mouseover' , () => {
            element.style.backgroundColor = 'black';
            console.log(element)
        })
    }
    container.style.setProperty(`grid-template-columns` , `repeat(${grid.columns} , 1fr)`);

}

/* Hover Functions */


/* Trying to create a hover mouse function */

