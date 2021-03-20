class Game {

    constructor() {
        this._elements = { x: 'x', o: 'o' };

        this._players = {
            PlayerOne: new Player("Player One", this._elements.x),
            PlayerTwo: new Player("Player Two", this._elements.o),
        };

        this._gameStates = {
            CONTINUE: 'continue',
            WIN: 'win',
            DRAW: 'draw',
        };

        this._initialiseGame();
    }

    get board() {
        return this._board;
    }

    set board(board) {
        this._board = board;
    }

    get players() {
        return this._players
    }

    _initialiseGame() {
        this._board = Array(3).fill(
            Array(3).fill('_')
        );

        this.activePlayer = 'PlayerOne';

        this.winner = ''; // PlayerOne or PlayerTwo

        this.gameState = this._gameStates.CONTINUE; // continue, win, draw
    }

    _changeActivePlayer() {
        if (this.activePlayer == 'PlayerOne') {
            this.activePlayer = 'PlayerTwo';
        } else {
            this.activePlayer = 'PlayerOne';
        }
    }

    _isPositionBlank(x, y) {
        return this._board[x][y] == '_';
    }

    _gameCanContinue() {
        return this._board.flat().some( element => element == '_');
    }

    resetGame() {
        this._initialiseGame();
    }

    playTurn(x, y) {
        if (!this._isPositionBlank(x, y)) return;

        this._board[x][y] = this._players[this.activePlayer].element;
        this._changeActivePlayer();
        this.checkGameState();
    }

    getPlayerByElement(_element) {
        return Object.keys(this._players).find(
            key => this._players[key].element == _element
        );
    }

    checkGameState() {
        const columns = this._board[0].map((_, colIndex) => this._board.map(row => row[colIndex]));
        const diagonals = [
            [this._board[0][0], this._board[1][1], this._board[2][2]],
            [this._board[0][2], this._board[1][1], this._board[2][0]],
        ];

        for (let combination of [...this._board, ...columns, ...diagonals]) {
            const uniqueElements = [ ...new Set(combination)];

            if (!uniqueElements.includes('_') && uniqueElements.length == 1) {
                this.gameState = this._gameStates.WIN;
                this.winner = this.getPlayerByElement(uniqueElements[0]);
                return;
            }

        }

        this.gameState = this._gameCanContinue() ? this._gameStates.CONTINUE : this._gameStates.DRAW;
    }
}

class Player {
    constructor(name, element) {
        this.name = name;
        this.element = element;
    }
}

module.exports = Game;
