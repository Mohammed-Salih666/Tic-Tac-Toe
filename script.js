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


    startButton.addEventListener("click", init);
    
    const player1 = Player("player1", "X");
    const player2 = Player("player2", "O");
    let currentPlayer = player1;

    const play = (index) => {

        board[index] = currentPlayer.marker; 
        boxes[index].textContent = currentPlayer.marker;


        player1 == currentPlayer ? currentPlayer = player2
        : currentPlayer = player1;

       
    };


return {};
})();

const displayController = (() => {

})();


// gameBoard.render();


