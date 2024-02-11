let currentPlayer = 'x';
const NUMBER_OF_ROWS = 3;
const turns = NUMBER_OF_ROWS ** 2;
let turnsCounter = 0; 

const getCellPlacement = (index,numberOfRows)=>{
	const row = Math.floor(index / numberOfRows);
	const col = index % numberOfRows;

	return [row,col]
}

const cellClickHandler =(event,index) =>{
const cell = event.target;

const placement = getCellPlacement(index,NUMBER_OF_ROWS);

console.log({placement});
 }

const createBoard = ()=>{
	const container = document.querySelector(".container");
	const board = document.createElement("div");

	board.classList.add('board');

	for (let i = 0; i < turns; i++) {
		const cellElementString = `<div class='cell'><span class='value'></span></div>`;
		const cellElement = document.createRange().createContextualFragment(cellElementString) ;
		
		cellElement.querySelector(".cell").onclick = (event) =>cellClickHandler(event,i);
		board.appendChild(cellElement);
		document.documentElement.style.setProperty("--grid-rows",NUMBER_OF_ROWS);
	}
container.insertAdjacentElement('afterbegin',board);
}

createBoard();