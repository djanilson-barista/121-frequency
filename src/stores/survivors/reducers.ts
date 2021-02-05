import { Reducer } from 'redux';
import { ActionTypes, Survivor, SurvivorState } from './types';

const initialSurvivors: Survivor[] = [];

const initialState: SurvivorState = {
  data: initialSurvivors,
  loading: false,
  editingSurvivor: {},
  selectedSurvivor: {},
  isEditing: false,
};

export const survivorReducer: Reducer<SurvivorState> = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.FETCH_SURVIVOR:
      return {
        ...state,
        data: [].concat(payload),
      };

    case ActionTypes.CREATE_SURVIVOR_RESOLVE:
    case ActionTypes.TOGGLE_INFECTED_SURVIVOR_RESOLVE:
    case ActionTypes.REMOVE_SURVIVOR_RESOLVE:
      return {
        ...state,
        data: payload,
      };

    case ActionTypes.DESELECT_SURVIVOR:
      return {
        ...state,
        selectedSurvivor: {},
      };

    case ActionTypes.SELECT_SURVIVOR:
      const newState = {
        ...state,
        selectedSurvivor: state.data.find(survivor => survivor.id === payload),
      };

      return newState;

    case ActionTypes.EDIT_SURVIVOR:
      return {
        ...state,
        isEditing: true,
        editingSurvivor: state.data.find(
          survivor => survivor.id === payload.key,
        ),
      };

    case ActionTypes.UPDATE_SURVIVOR_RESOLVE:
      return {
        ...state,
        data: payload,
        isEditing: false,
        editingSurvivor: {},
      };

    default:
      return state;
  }
};
