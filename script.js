const Player = (name, marker) => {
    return {name, marker}
};


const gameBoard = (() => {

    let board = ["", "", "","","","","","",""]; 
    const boxes = document.querySelectorAll('.box');
    const winnerDiv = document.querySelector("#winnerDiv");
    let win; 
    let currentPlayer;
  
    const init = () => {
        const names = document.querySelectorAll('input');
        const player1 = Player(names[0].value, "X");
        const player2 = Player(names[1].value, "O");
        currentPlayer = player1;
        win = false;

        for(let i=0; i<boxes.length; i++) {
            
            boxes[i].addEventListener("click", () => {
                
                if(!win){
                    if(board[i] === "") {
                        board[i] = currentPlayer.marker;
                        boxes[i].textContent = board[i];
                        let winner = checkWinner();
                        currentPlayer = currentPlayer === player1 ? player2 : player1; 

                        if(winner !== undefined && winner !== "") {
                            winnerDiv.textContent = (winner === "X"? player1.name : player2.name) + " Wins!"; 
                            win = true;
                            restartButton.style = "display: inline;";
                        }
                        else if(winner===undefined && !board.includes("")) {
                            winnerDiv.textContent = "Tie!";
                            win = true; 
                            restartButton.style = "display: inline;";
                        }
                    }
                   
                }
                
            });
        }
    }

    const checkWinner = () => {
        let winner = 
        board[0] === board[1] && board[1] === board[2] && board[0] !== "" ? board[0] 
        : board[3] === board[4] && board[4] === board[5] && board[3] !== "" ? board[3]
        : board[6] === board[7] && board[7] === board[8]  && board[6] !== "" ? board[6]

        : board[0] === board[3] && board[3] === board[6] && board[0] !== ""? board[0]
        : board[1] === board[4] && board[4] === board[7] && board[1] !== ""? board[1]
        : board[2] === board[5] && board[5] === board[8] && board[2] !== ""? board[2]

        : board[0] === board[4] && board[4] === board[8] && board[0] !== ""? board[0]
        : board[2] === board[4] && board[4] === board[6] && board[2] !== ""? board[2]
        : undefined;

        return winner; 
    }

    const reset = () => {
        board = ["", "", "","","","","","",""];
        win = false;
        boxes.forEach(box => box.textContent = "");
        winnerDiv.textContent = "";
    }

    return {init, reset}
})();

const displayController = (() => {

})();

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => 
{
    gameBoard.init(); 
    startButton.style = "display: none";
}), {once:true};

const restartButton = document.querySelector('#restart');
restartButton.addEventListener("click", gameBoard.reset);
