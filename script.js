const container = document.getElementById('container');
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};
createGrid(64);
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createGrid(input) {
    removeChilds(container);  
        for(x=1; x<=input;x++) {
            const square = document.createElement('div');
            square.className = "square";  
            square.style.width = `${512/Math.sqrt(input)}px`;
            square.style.height = `${512/Math.sqrt(input)}px`;
            square.style.maxWidth = `${512/Math.sqrt(input)}px`;
            square.style.maxHeight = `${512/Math.sqrt(input)}px`;
            square.addEventListener("mouseover", function(e) {
                this.style.backgroundColor = (`${random_rgba()}`);
            })
            //container.style.grid = `${(512/Math.sqrt(input))}px`;
            container.appendChild(square);
}
}
const squares = document.getElementsByClassName('square');
/*for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function(e) {
        this.style.backgroundColor = (`${random_rgba()}`);
    })
    }*/

const eraser = document.getElementById('erase');
eraser.addEventListener("click", clearBoard);
function clearBoard() {
    for(let x=0; x<squares.length;x++) {
    squares[x].style.backgroundColor = ('white');
    }
}

// When the user clicks on <div>, open the popup    
const gridSize = document.getElementById("gridSize");
gridSize.addEventListener('click', createPopup());
function createPopup() {
    const popup = document.createElement('span');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    button1.textContent = '4';
    button2.textContent = '16';
    button3.textContent = '64';
    popup.className = "popup";
    popup.innerHTML = "Set grid size:<br>";
    gridSize.appendChild(popup);
    popup.appendChild(button1);
    popup.appendChild(button2);
    popup.appendChild(button3);
    gridSize.addEventListener('click', function() {
        createGrid(event.target.textContent);
        popup.remove();
        gridSize.addEventListener('click', createPopup);
    })
    gridSize.removeEventListener('click', createPopup);
}