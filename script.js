const Player = (name, marker) => {
    
    const play = index => {
        gameBoard.board[index] = marker; 
        // console.log(gameBoard.board[index]);

    }

    return {name, marker, play}
};


const gameBoard = (() => {

    const board = ["", "", "","","","","","",""]; 
    const boxes = document.querySelectorAll('.box');
    const startButton = document.querySelector("#start");

    const player1 = Player("player1", "X");
    const player2 = Player("player2", "O");
    let currentPlayer = player1;

    let win = false; 

    const init = () => {
        
        for(let i=0; i<boxes.length; i++) {
            boxes[i].addEventListener("click", () => {
                if(boxes[i].textContent === ""){
                    if(!win) {
                        currentPlayer.play(i);
                        boxes[i].textContent = board[i];
                        // console.log(i);
                        console.log(board[i]);
                        currentPlayer = currentPlayer === player1 ? player2 : player1; 


                        let winner = checkWinner();
                        // console.log(winner);
                        if(winner !== undefined && winner != "") {
                            const winnerDiv = document.createElement('div');
                            winnerDiv.id = "winner"; 
                            winnerDiv.textContent = (winner === "X"? player1.name : player2.name) + " Wins!"; 
                            document.body.appendChild(winnerDiv);
                            win = true;
                        }
                    }
                   
                }
                
            }), {once: true};
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

    startButton.addEventListener("click", init);
    
return {board};
})();

const displayController = (() => {

})();


// gameBoard.render();
