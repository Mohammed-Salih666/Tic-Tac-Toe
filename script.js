
const gameBoard = (() => {
    const board = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']; 
    let currentPlayer;


    const render = () => {
        let container = document.createElement('div');
        container.className = "container";
        document.body.appendChild(container); 


        for(let i = 0; i<board.length; i++)  {
            let box = document.createElement('div'); 
            box.id = `box${i}`;
            box.textContent = board[i]; 

            box.addEventListener("click", () => play(i)), {once: true};
        
            container.appendChild(box);
        }

    }; 


    const play = (index) => {
        const player1 = Player("player1", "O"); 
        const player2 = Player("player2", "X"); 
        currentPlayer = player1;
        board[index] = currentPlayer.marker; 

        currentPlayer = player2; 
        
    };


return {render};
})();

const displayController = (() => {

})();

const Player = (name, marker) => {
    
    return {name, marker}
};

gameBoard.render();


