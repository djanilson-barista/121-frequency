import { action } from 'typesafe-actions';
import { Survivor, ActionTypes } from './types';

export const init = () => action(ActionTypes.INIT_APP);
export const fetchSurvivor = (data: any) =>
  action(ActionTypes.FETCH_SURVIVOR, data);

export const createSurvivor = (data: Survivor) =>
  action(ActionTypes.CREATE_SURVIVOR, data);
export const createSurvivorResolve = (data: Survivor[]) =>
  action(ActionTypes.CREATE_SURVIVOR_RESOLVE, data);

export const toggleInfectedSurvivor = (idItem: string) =>
  action(ActionTypes.TOGGLE_INFECTED_SURVIVOR_REQUEST, idItem);
export const toggleInfectedSurvivorResolve = (data: Survivor[]) =>
  action(ActionTypes.TOGGLE_INFECTED_SURVIVOR_RESOLVE, data);

export const selectSurvivor = (data: string) =>
  action(ActionTypes.SELECT_SURVIVOR, data);

export const deselectSurvivor = () => action(ActionTypes.DESELECT_SURVIVOR);

export const editSurvivor = (data: any) =>
  action(ActionTypes.EDIT_SURVIVOR, data);
export const endEditSurvivor = () => action(ActionTypes.END_EDIT_SURVIVOR);

export const updateSurvivor = (data: Survivor) =>
  action(ActionTypes.UPDATE_SURVIVOR, data);
export const updateSurvivorResolve = (data: Survivor[]) =>
  action(ActionTypes.UPDATE_SURVIVOR_RESOLVE, data);

export const removeSurvivor = (data: string) =>
  action(ActionTypes.REMOVE_SURVIVOR, data);
export const removeSurvivorResolve = (data: Survivor[]) =>
  action(ActionTypes.REMOVE_SURVIVOR_RESOLVE, data);
