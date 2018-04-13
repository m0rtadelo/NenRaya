import { Game } from '../model/game.model';
import { Action } from '@ngrx/store';

const MENU = 0;
const GAME = 1;

export function gameReducer(state: Game = { turn: 0, board: [], state: MENU, gridWidth: 3 }, action) {

    switch (action.type) {
        case 'RESET':
            return { turn: 0, board: [], state: MENU, gridWidth: 3 };
        case 'START':
            state.gridWidth = action.payload.turn;
            state.turn = 0;
            state.state = GAME;
            state.board = [];
            for (let i = 0; i < action.payload.turn * action.payload.turn; i++) {
                state.board.push(0);
            }
            return state;
        case 'TURN':
            state.board[action.payload.turn] = state.turn + 1;
            state.turn = 1 - state.turn;
            return state;
        default:
            return state;
    }
}
