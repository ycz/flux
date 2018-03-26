import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import {ActionTypes} from './AnagramsActions';
import AnagramsDispatcher from './AnagramsDispatcher';

class WordStashStore extends ReduceStore {
    constructor() {
        super(AnagramsDispatcher);
    }

    getInitialState() {
        return Immutable.List();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.SUBMIT_WORD:
                if (!action.word) {
                    return state;
                }
                return state.push(action.word);
                
            // case TodoActionTypes.ADD_TODO:
            //     if (!action.text) {
            //         return state;
            //     }
            //     const id = Counter.increment();
            //     return state.set(id, new Todo({
            //         id,
            //         text: action.text,
            //         complete: false,
            //     }));

            // case TodoActionTypes.DELETE_TODO:
            //     if (!action.id) {
            //         return state;
            //     }
            //     return state.delete(action.id);
            
            // case TodoActionTypes.TOGGLE_TODO:
            //     return state.update(
            //         action.id, 
            //         todo => todo.set('complete', !todo.complete),
            //     );
            
            default:
                return state;
        }
    }
}

export default new WordStashStore();