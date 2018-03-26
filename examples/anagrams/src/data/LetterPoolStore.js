import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import { ActionTypes } from './AnagramsActions';
import AnagramsDispatcher from './AnagramsDispatcher';

class LetterPoolStore extends ReduceStore {
    constructor() {
        super(AnagramsDispatcher);
    }

    getInitialState() {
        return Immutable.List();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.PULL_TILE:
                return state.push('A');
            default:
                return state;
        }
    }
}

export default new LetterPoolStore();