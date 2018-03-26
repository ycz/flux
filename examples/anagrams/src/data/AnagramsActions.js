import AnagramsDispatcher from './AnagramsDispatcher';

const ActionTypes = {
//     ADD_TODO: 'ADD_TODO',
//     DELETE_TODO: 'DELETE_TODO',
//     TOGGLE_TODO: 'TOGGLE_TODO',
    PULL_TILE: 'PULL_TILE',
    SUBMIT_WORD: 'SUBMIT_WORD'
};

const AnagramsActions = {
    pullTile() {
        AnagramsDispatcher.dispatch({
            type: ActionTypes.PULL_TILE,
        });
    },

    submitWord(word) {
        AnagramsDispatcher.dispatch({
            type: ActionTypes.SUBMIT_WORD,
            word
        })
    },

    // addTodo(text) {
    //     TodoDispatcher.dispatch({
    //         type: ActionTypes.ADD_TODO,
    //         text,
    //     });
    // },

    // deleteTodo(id) {
    //     TodoDispatcher.dispatch({
    //         type: ActionTypes.DELETE_TODO,
    //         id,
    //     });
    // },

    // toggleTodo(id) {
    //     TodoDispatcher.dispatch({
    //         type: ActionTypes.TOGGLE_TODO,
    //         id,
    //     });
    // },
};

export {AnagramsActions, ActionTypes};