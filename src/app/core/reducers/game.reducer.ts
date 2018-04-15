import { Game } from '../model/game.model';
import { Action } from '@ngrx/store';

const MENU = 0;
const GAME = 1;

export function gameReducer(state: Game = { turn: 0, board: [], state: MENU, gridWidth: 3 }, action) {

    switch (action.type) {
        case 'RESET':
            return { turn: 0, board: [], state: MENU, gridWidth: 3 };
        case 'START':
            state = { turn: 0, board: [], state: GAME, gridWidth: action.payload.turn };
            for (let i = 0; i < action.payload.turn * action.payload.turn; i++) {
                state.board.push(0);
            }
            return state;
        case 'TURN':
            state.board[action.payload.turn] = state.turn + 1;
            check();
            state.turn = 1 - state.turn;
            return state;
        default:
            return state;
    }

    function check() {
        if (checkHorizontal()) {
            state.state = MENU;
            state.board = [];
        }
    }

    function checkHorizontal() {
        let last = 0;
        let match = 1;
        for (let index = 0; index < state.board.length; index++) {
            if (state.board[index] > 0) {
                if (state.board[index] !== last || index % state.gridWidth === 0) {
                    last = state.board[index];
                    match = 1;
                } else {
                    match++;
                }
                if (match > 2) {
                    return true;
                }
            }
        }
        return false;
    }
}
