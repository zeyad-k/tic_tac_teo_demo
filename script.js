let currentPlayer = 'x';
const NUMBER_OF_ROWS = 3;
const turns = NUMBER_OF_ROWS ** 2;
let turnsCounter = 0; 

let board = [
	["_","_","_"],
	["_","_","_"],
	["_","_","_"],
 ];

const getCellPlacement = (index,numberOfRows)=>{
	const row = Math.floor(index / numberOfRows);
	const col = index % numberOfRows;

	return [row,col]
}

const checkWin = () => false;

const runWinEvent = () => false;

const runDrawEvent = () => false;

const drawMarkInCell = (cell,currentPlayer) =>{
	cell.querySelector('.value').textContent = currentPlayer;
	cell.classList.add(`cell--${currentPlayer}`);

}

const cellClickHandler =(event,index) =>{
	debugger;
const cell = event.target;

const [row,col] = getCellPlacement(index,NUMBER_OF_ROWS);

if (board[row][col] === "_"){
	turnsCounter++;
	board[row][col] = currentPlayer;
	cell.querySelector(".value").textContent = currentPlayer;
	cell.classList.add(`cell--${currentPlayer}`);
	
	// drawMarkInCell(cell,currentPlayer);

	if (checkWin()) {
		runWinEvent();
		
	}else{
		if (turnsCounter === turns) {
			runDrawEvent();
		}

	 
		  turnsCounter === turns && runDrawEvent();

		//  currentPlayer = currentPlayer === "x" ? "o" : "x";

	}
}
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