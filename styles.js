/* 16x16 divs */
const container = document.querySelector('#container');
const grid = {rows:16 , columns:16};
const total = grid.rows * grid.columns;

createGrid(total);

function createGrid(total) {
    for( let i = 0; i < total; i++){
        const element = document.createElement('div');
        element.textContent = `${i+1}`;
        element.style.width = '960px';
        element.classList.add('box');
        element.style.minHeight = '0';
        element.style.minWidth = '0';
        element.style.overflow = 'hidden';
        container.appendChild(element);
        /* This function changes the square background color to black on a mouseover event */
        element.addEventListener('mouseover' , () => {
            element.style.backgroundColor = 'black';
            console.log(element)
        })
    }
    container.style.setProperty(`grid-template-columns` , `repeat(${grid.columns} , 1fr)`);

}

createButton();

function createButton() {
    const buttonDiv = document.querySelector('.buttonDiv');
    const reset = document.createElement('button');
    reset.textContent = 'Reset Grid!';
    buttonDiv.appendChild(reset);
}


