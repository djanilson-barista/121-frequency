import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { default as rootReducer } from './rootReducer';

import SurvivorSagas from './survivors/sagas';

import { SurvivorState } from './survivors/types';

export interface AppState {
  survivorState: SurvivorState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(SurvivorSagas);

export default store;
