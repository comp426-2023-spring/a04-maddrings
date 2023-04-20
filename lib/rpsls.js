export {rpsPlay, rpslsPlay}

function rpsPlay(playerAction){
    const possibleMoves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() *  possibleMoves.length);

    if(playerAction === undefined){
        return{
            player: possibleMoves[randomIndex]
        };
    } else if (!possibleMoves.includes(playerAction.toLowerCase())){
        console.error('Error: Player move not included in move list, Available moves are rock, paper, or scissors.')
        throw new RangeError();
    } else{
        const ComputerAction = possibleMoves[randomIndex];
        let result;

        switch(playerAction.toLowerCase()){
            case 'rock':
                result = (ComputerAction === 'rock') ? 'tie' :
                         (ComputerAction === 'paper') ? 'lose' : 'win'; //if computer throws paper they lose
                break;
            case 'paper':
                result = (ComputerAction === 'paper') ? 'tie' :
                         (ComputerAction === 'scissors') ? 'lose' : 'win';
                break;
            case 'scissors':
                result = (ComputerAction === 'scissors') ? 'tie' :
                         (ComputerAction === 'rock') ? 'lose' : 'win';
                break;
        }

        return{
            player: playerAction.toLowerCase(),
            opponent: ComputerAction,
            result: result
        };
    }

}

function rpslsPlay(playerAction){
    const possibleMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() *  possibleMoves.length);

    if(playerAction === undefined){
        return{
            player: possibleMoves[randomIndex]
            
        };
    } else if (!possibleMoves.includes(playerAction.toLowerCase())){
        console.error('Error: Player move not included in move list, Available moves are rock, paper, scissors, lizard, or spock.')
        throw new RangeError();
    } else{
        const ComputerAction = possibleMoves[randomIndex];
        let result;

        switch(playerAction.toLowerCase()){
            case 'rock':
                result = (ComputerAction === 'rock') ? 'tie' :
                         (ComputerAction === 'paper' || ComputerAction === 'spock') ? 'lose' : 'win';
                break;
            case 'paper':
                result = (ComputerAction === 'paper') ? 'tie' :
                         (ComputerAction === 'scissors' || ComputerAction === 'lizard') ? 'lose' : 'win';
                break;
            case 'scissors':
                result = (ComputerAction === 'scissors') ? 'tie' :
                         (ComputerAction === 'rock' || ComputerAction === 'spock') ? 'lose' : 'win';
                break;
            case 'lizard':
                result = (ComputerAction === 'lizard') ? 'tie' :
                         (ComputerAction === 'rock' || ComputerAction === 'scissors') ? 'lose' : 'win';
                break;
            case 'spock':
                result = (ComputerAction === 'spock') ? 'tie' :
                         (ComputerAction === 'paper' || ComputerAction === 'lizard') ? 'lose' : 'win';
                break;    
            
        }

        return{
            player: playerAction.toLowerCase(),
            opponent: ComputerAction,
            result: result
        };
    }
}
