import createInitial from './createInitial';
import { cloneMatrix } from '../utils/utils';
import { UP, DOWN, RIGHT, LEFT } from '../actions/actions';

const reducer = (state = createInitial(), action) => {
    switch(action.type){
        case UP:
            if( state.playerPosition.r - 1 < 0) {
                return state;
            }

            let mat = cloneMatrix(state.mapMatrix);
            mat[state.playerPosition.r][state.playerPosition.c] = 'f';
            mat[state.playerPosition.r - 1][state.playerPosition.c] = 'p';

            return {
                mapMatrix: mat,
                playerPosition: {
                    r: state.playerPosition.r - 1,
                    c: state.playerPosition.c,
                }
            };
        case DOWN:
            if( state.playerPosition.r + 1 >= state.mapMatrix.length) {
                return state;
            }

            let mat = cloneMatrix(state.mapMatrix);
            mat[state.playerPosition.r][state.playerPosition.c] = 'f';
            mat[state.playerPosition.r + 1][state.playerPosition.c] = 'p';

            return {
                mapMatrix: mat,
                playerPosition: {
                    r: state.playerPosition.r + 1,
                    c: state.playerPosition.c,
                }
            };
        case RIGHT:
            if( state.playerPosition.c + 1 >= state[0].mapMatrix.length) {
                return state;
            }

            let mat = cloneMatrix(state.mapMatrix);
            mat[state.playerPosition.r][state.playerPosition.c] = 'f';
            mat[state.playerPosition.r][state.playerPosition.c + 1] = 'p';

            return {
                mapMatrix: mat,
                playerPosition: {
                    r: state.playerPosition.r,
                    c: state.playerPosition.c + 1,
                }
            };
        case LEFT:
            if( state.playerPosition.c - 1 < 0) {
                return state;
            }

            let mat = cloneMatrix(state.mapMatrix);
            mat[state.playerPosition.r][state.playerPosition.c] = 'f';
            mat[state.playerPosition.r][state.playerPosition.c - 1] = 'p';

            return {
                mapMatrix: mat,
                playerPosition: {
                    r: state.playerPosition.r,
                    c: state.playerPosition.c - 1,
                }
            };
        default:
            return state;
    }
}