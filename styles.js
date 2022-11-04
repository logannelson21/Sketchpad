/* 16x16 divs */
const containerDiv = document.querySelector('#containerDiv');


function createGrid(rows , columns) {

    while(document.querySelector('button') !== null) {
        document.querySelector('button').remove();
    }
    
    containerDiv.style.setProperty('--grid-columns' , columns);
    containerDiv.style.setProperty('--grid-rows' , rows);
    containerDiv.style.width = '960px';
    containerDiv.style.overflow = 'hidden';
    for( let i = 0; i < (rows * columns); i++) {
        const square = document.createElement('div');
        square.style.minHeight = '0';
        square.style.minWidth = '0';
        square.style.overflow = 'hidden';
        containerDiv.appendChild(square).className = 'grid-item';
        /* This function changes the square background color to black on a mouseover event */
        square.addEventListener('mouseover' , () => {
            square.style.backgroundColor = 'black';
        })
    }

    createButton();

}



function createButton() {
    const buttonDiv = document.querySelector('#buttonDiv');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Grid!';
    resetButton.style.margin = '20px';
    buttonDiv.appendChild(resetButton);

    resetButton.addEventListener('click' , () => {
        document.querySelectorAll('.grid-item').forEach(e => e.remove());
        let userInput = prompt('Please enter the number of squares for each side (Max: 100)');
        if(userInput > 100 ) {
            alert('You picked more than the max of 100....');
            return;
        }
        rows = userInput;
        columns = userInput;
        createGrid(rows , columns);
    })
    
}



createGrid(16 , 16);




