import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import {AnagramsActions} from '../data/AnagramsActions';
import WordStashStore from '../data/WordStashStore';
import LetterPoolStore from '../data/LetterPoolStore';

function getStores() {
    return [
        WordStashStore, 
        LetterPoolStore,
    ];
}

function getState() {
    return {
        wordStash: WordStashStore.getState(),
        letterPool: LetterPoolStore.getState(),
        onPullTile: AnagramsActions.pullTile,
        onSubmitWord: AnagramsActions.submitWord,
      };
}

export default Container.createFunctional(AppView, getStores, getState);