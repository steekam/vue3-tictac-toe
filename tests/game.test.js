const Game = require('../src/game');

describe('Game initialisation', () => {
    const game = new Game();

    test('Initialises a 3x3 board with blanks', () => {
        expect(game.board.length).toBe(3);
        expect(game.board.flat().every(element => element == '_')).toBeTruthy();
    });

    test('Initialises two players', () => {
        const { PlayerOne, PlayerTwo } = game.players;

        expect(PlayerOne).toEqual({ name: "Player One", element: 'x' });
        expect(PlayerTwo).toEqual({ name: "Player Two", element: 'o' });
    });

    test('It is PlayerOne\'s turn when game starts', () => {
        expect(game.activePlayer).toBe('PlayerOne');
    });
});

describe("Testing playTurn", () => {
    test("A player can play their element at the correct position on the board.", () => {
        const game = new Game();
        let currentPlayer = game.activePlayer;
        game.playTurn(0, 0);
        expect(game.board[0][0]).toBe(game.players[currentPlayer].element);

        currentPlayer = game.activePlayer;
        game.playTurn(0, 1);
        expect(game.board[0][1]).toBe(game.players[currentPlayer].element);
    });

    test("Game changes the active player after a turn is played.", () => {
        const game = new Game();
        game.playTurn(0, 0);
        expect(game.activePlayer).toBe('PlayerTwo');
    });

    test("Does not accept a play on a non-blank position", () => {
        const game = new Game();
        let currentPlayer = game.activePlayer;
        game.playTurn(0, 0);
        expect(game.board[0][0]).toBe(game.players[currentPlayer].element);

        currentPlayer = game.activePlayer;
        game.playTurn(0, 0);
        expect(game.board[0][0]).not.toBe(game.players[currentPlayer].element);
    });
});

describe("Gameplay tests.", () => {

    test('Can retrieve player key from the element assigned to them.', () => {
        const game = new Game();

        expect(game.getPlayerByElement('x')).toBe('PlayerOne');
        expect(game.getPlayerByElement('o')).toBe('PlayerTwo');
    });

    test("it can determine a win", () => {
        const game = new Game();
        game.board = [
            ['x', 'x', 'x'],
            ['_', 'o', '_'],
            ['_', '_', 'o']
        ];

        game.checkGameState();
        
        expect(game.gameState).toBe(game._gameStates.WIN);
        expect(game.winner).toBe('PlayerOne');

        game.resetGame();

        game.board = [
            ['o', 'x', 'x'],
            ['_', 'o', '_'],
            ['x', '_', 'o']
        ];

        game.checkGameState();
        
        expect(game.gameState).toBe(game._gameStates.WIN);
        expect(game.winner).toBe('PlayerTwo');
    });

    test("it can determine a draw", () => {
        const game = new Game();
        game.board = [
            ['x', 'o', 'x'],
            ['x', 'o', 'o'],
            ['o', 'x', 'x']
        ];

        game.checkGameState();
        
        expect(game.gameState).toBe(game._gameStates.DRAW);
        expect(game.winner).toBe('');
    });
});

