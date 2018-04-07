import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import { ActionTypes } from './AnagramsActions';
import AnagramsDispatcher from './AnagramsDispatcher';
import WordStashStore from "./WordStashStore";

let _bag = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "F", "G", "G", "G", "G", "H", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "J", "K", "K", "L", "L", "L", "L", "L", "M", "M", "M", "N", "N", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "P", "Q", "Q", "R", "R", "R", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "U", "U", "V", "V", "V", "W", "W", "W", "X", "X", "Y", "Y", "Y", "Z", "Z"];
let freqDict = function (word) {
    let wordFreqs = {};
    for (let idx in word) {
        let char = word[idx];
        wordFreqs[char] = wordFreqs[char] ? wordFreqs[char] + 1 : 1;
    }
    return wordFreqs;
};

let _wordSet;
fetch('http://localhost:8001/src/data/word-list.json').then(function(response) {
    response.text().then(function(text) {
        _wordSet = new Set(JSON.parse(text));
    });
});

class LetterPoolStore extends ReduceStore {
    constructor() {
        super(AnagramsDispatcher);
    }

    getInitialState() {
        return Immutable.List();
    }

    getLetters() {
        return this.getState().toArray();
    }

    canMakeWord(word) {
        let wordFreqs = freqDict(word.toUpperCase());
        let poolFreqs = freqDict(this.getState().toArray());
        for (let char in wordFreqs) {
            if (wordFreqs[char] > (poolFreqs[char] || 0)) {
                return false;
            }
        }
        console.log('dict');
        return _wordSet.has(word.toLowerCase());
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.PULL_TILE:
                if (!_bag.length) {
                    return state;
                }
                let index = Math.floor(Math.random() * _bag.length);
                return state.push(_bag.splice(index, 1)[0]);
            case ActionTypes.SUBMIT_WORD:
                AnagramsDispatcher.waitFor([WordStashStore.getDispatchToken()]);
                let word = action.word.toUpperCase();
                if (!word || !this.canMakeWord(word)) {
                    console.log('cant');
                    return state;
                }
                let newState = this.getState();
                for (let idx in word) {
                    let char = word.charAt(idx);
                    for (let i = 0; i < newState.size; i++) {
                        if (newState.get(i) === char) {
                            newState = newState.delete(i);
                            break;
                        }
                    }
                }
                return newState;
            default:
                return state;
        }
    }
}

export default new LetterPoolStore();