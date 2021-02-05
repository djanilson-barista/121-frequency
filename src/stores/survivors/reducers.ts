import { Reducer } from 'redux';
import { ActionTypes, Survivor, SurvivorState } from './types';

const initialSurvivors: Survivor[] = [];

const initialState: SurvivorState = {
  data: initialSurvivors,
  loading: false,
  editingSurvivor: {},
  selectedSurvivor: {},
  isEditing: false,
  percents: {
    healthy: '0',
    infected: '0',
  },
};

const getPercent = (data: Survivor[]) => {
  const size = data.length;
  const sizeHealthy = data.filter(item => !item.infected).length;

  if (!size) {
    return {
      healthy: 0,
      infected: 0,
    };
  }

  return {
    healthy: ((sizeHealthy * 100) / size).toFixed(2),
    infected: (100 - (sizeHealthy * 100) / size).toFixed(2),
  };
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
        percents: getPercent(payload),
      };

    case ActionTypes.CREATE_SURVIVOR_RESOLVE:
    case ActionTypes.TOGGLE_INFECTED_SURVIVOR_RESOLVE:
    case ActionTypes.REMOVE_SURVIVOR_RESOLVE:
      return {
        ...state,
        data: payload,
        percents: getPercent(payload),
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

    case ActionTypes.END_EDIT_SURVIVOR:
      return {
        ...state,
        isEditing: false,
        editingSurvivor: {},
      };
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
        percents: getPercent(payload),
        isEditing: false,
        editingSurvivor: {},
      };

    default:
      return state;
  }
};
