import createInitial from './createInitial';
import { UP, DOWN, RIGHT, LEFT } from '../actions/actions';

const reducer = (state = createInitial(), action) => {
    switch(action.type){
        case UP:
            return {
                playerPosition: {
                    x: state.playerPosition.x,
                    y: state.playerPosition.y + 1,
                },
            };
        case DOWN:
        case RIGHT:
        case LEFT:
        default:
            return state;
    }
}