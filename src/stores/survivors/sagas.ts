import { all, put, takeEvery } from 'redux-saga/effects';
import { localStorageAPI } from 'stores/api';
import {
  createSurvivorResolve,
  fetchSurvivor,
  removeSurvivorResolve,
  toggleInfectedSurvivorResolve,
  updateSurvivorResolve,
} from './actions';
import { ActionTypes, Survivor } from './types';

/**
 * @description Receive a collection of survivors and set them on localStorage
 */
const setSurvivors = (survivors: Survivor[]) => {
  localStorageAPI.setItem('survivors', survivors);
  return;
};

/**
 * @description Creates a new survivor in storage with the received data
 * @param {*} { payload } - Survivor data
 */
export function* create({ payload }: any) {
  const survivor: Survivor = {
    ...payload,
  };

  const survivors: Survivor[] = yield localStorageAPI.getItem('survivors');

  survivors.push(survivor);
  yield setSurvivors(survivors);

  return yield put(createSurvivorResolve(survivors));
}

/**
 * @description Load survivors, if any, when the initial application starts
 */
export function* fetch() {
  const survivors = yield localStorageAPI.getItem('survivors');

  return yield put(fetchSurvivor(survivors));
}

/**
 * @description Receive data from a survivor, search for storage and update their values
 * @param {*} { payload }
 * @returns
 */
export function* update({ payload }: any) {
  const survivors: Survivor[] = yield localStorageAPI.getItem('survivors');
  const survivorIdx = survivors.findIndex(item => item.id === payload.id);

  survivors[survivorIdx] = payload;
  yield setSurvivors(survivors);

  return yield put(updateSurvivorResolve(survivors));
}

/**
 * @description Removes the survivor based on the id
 * @export
 * @param {*} { payload } - id
 * @returns
 */
export function* remove({ payload }: any) {
  const survivors = yield localStorageAPI.getItem('survivors');
  const newSurvivors = survivors.filter(
    (survivor: Survivor) => survivor.id !== payload,
  );

  yield setSurvivors(newSurvivors);
  return yield put(removeSurvivorResolve(newSurvivors));
}

export function* toggleInfected({ payload }: any) {
  const survivors: Survivor[] = yield localStorageAPI.getItem('survivors');
  const survivorIdx = survivors.findIndex(item => item.id === payload);

  survivors[survivorIdx].infected = !survivors[survivorIdx].infected;
  yield setSurvivors(survivors);

  return yield put(toggleInfectedSurvivorResolve(survivors));
}

export default function* SurvivorSagas() {
  return yield all([
    takeEvery(ActionTypes.INIT_APP, fetch),
    takeEvery(ActionTypes.REMOVE_SURVIVOR, remove),
    takeEvery(ActionTypes.CREATE_SURVIVOR, create),
    takeEvery(ActionTypes.UPDATE_SURVIVOR, update),
    takeEvery(ActionTypes.TOGGLE_INFECTED_SURVIVOR_REQUEST, toggleInfected),
  ]);
}
