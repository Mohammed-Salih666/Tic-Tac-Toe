const Player = (name, marker) => {
    
    // const play = index => {
    //     gameBoard.board[index] = marker; 
    // }

    return {name, marker, play}
};


const gameBoard = (() => {

    let board = ["", "", "","","","","","",""]; 
    const boxes = document.querySelectorAll('.box');
    const startButton = document.querySelector("#start");
    const restartButton = document.querySelector('#restart');
    let win; 
    let currentPlayer;
  
    const init = () => {
        const player1 = Player("player1", "X");
        const player2 = Player("player2", "O");
        currentPlayer = player1;
        win = false;

        for(let i=0; i<boxes.length; i++) {
            
            boxes[i].addEventListener("click", () => {
                
                if(board[i] === ""){
                    if(!win) {
                        // currentPlayer.play(i);
                        board[i] = currentPlayer.marker;
                        boxes[i].textContent = board[i];
                        // console.log(i);
                        console.log(board[i]);
                        currentPlayer = currentPlayer === player1 ? player2 : player1; 


                        let winner = checkWinner();

                        if(winner !== undefined && winner != "") {
                            const winnerDiv = document.createElement('div');
                            winnerDiv.id = "winner"; 
                            winnerDiv.textContent = (winner === "X"? player1.name : player2.name) + " Wins!"; 
                            document.body.appendChild(winnerDiv);
                            win = true;
                            restartButton.style = "display: inline;";
                        }
                        else if(winner===undefined && !board.includes("")) {
                            const winnerDiv = document.createElement('div');
                            winnerDiv.id = "winner"; 
                            winnerDiv.textContent = "Tie!";
                            document.body.appendChild(winnerDiv); 
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
        board[0] === board[1] && board[1] === board[2] ? board[0] 
        : board[3] === board[4] && board[4] === board[5] ? board[3]
        : board[6] === board[7] && board[7] === board[8] ? board[6]

        : board[0] === board[3] && board[3] === board[6] ? board[0]
        : board[1] === board[4] && board[4] === board[7] ? board[1]
        : board[2] === board[5] && board[5] === board[8] ? board[2]

        : board[0] === board[4] && board[4] === board[8] ? board[0]
        : board[2] === board[4] && board[4] === board[6] ? board[2]
        : undefined;

        return winner; 
    }

    const reset = () => {
        board = ["", "", "","","","","","",""];
        win = false;
        boxes.forEach(box => {
            box.textContent = ""
            box.removeEventListener("click", function(){});
        });
        // init();
    }
    startButton.addEventListener("click", init), {once:true};
    restartButton.addEventListener("click", reset);

return {board};

})();

const displayController = (() => {

})();
