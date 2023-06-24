const Player = (name, marker) => {
    
    return {name, marker}
};


const gameBoard = (() => {
    const board = ["", "", "","","","","","",""]; 
    const boxes = document.querySelectorAll('.box');
    const startButton = document.querySelector("#start");

    const init = () => {
        for(let i=0; i<boxes.length; i++) {
            boxes[i].addEventListener("click", () => {
                if(boxes[i].textContent === ""){
                    play(i);
                    console.log(i);
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
    
    const player1 = Player("player1", "X");
    const player2 = Player("player2", "O");
    let currentPlayer = player1;

    const play = (index) => {

        if(currentPlayer != null) {
            board[index] = currentPlayer.marker; 
            boxes[index].textContent = currentPlayer.marker;
        }
  


        player1 == currentPlayer ? currentPlayer = player2
        : currentPlayer = player1;

        let winner = checkWinner();
        console.log(winner);
        if(winner !== undefined && winner != "") {
            const winnerDiv = document.createElement('div');
            winnerDiv.id = "winner"; 
            winnerDiv.textContent = winner === "X"? player1 : player2; 
            document.body.appendChild(winnerDiv);
            currentPlayer = null;
        }
        if(!board.includes("")) {

        }

    };


return {};
})();

const displayController = (() => {

})();


// gameBoard.render();


