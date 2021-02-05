export enum ActionTypes {
  INIT_APP = 'INIT',
  FETCH_SURVIVOR = 'FETCH_SURVIVOR',

  CREATE_SURVIVOR = 'CREATE_SURVIVOR',
  CREATE_SURVIVOR_RESOLVE = 'CREATE_SURVIVOR_RESOLVE',

  UPDATE_SURVIVOR = 'UPDATE_SURVIVOR',
  UPDATE_SURVIVOR_RESOLVE = 'UPDATE_SURVIVOR_RESOLVE',

  EDIT_SURVIVOR = 'EDIT_SURVIVOR',
  END_EDIT_SURVIVOR = 'END_EDIT_SURVIVOR',

  SELECT_SURVIVOR = 'SELECT_SURVIVOR',
  DESELECT_SURVIVOR = 'DESELECT_SURVIVOR',

  TOGGLE_INFECTED_SURVIVOR_REQUEST = 'TOGGLE_INFECTED_SURVIVOR_REQUEST',
  TOGGLE_INFECTED_SURVIVOR_RESOLVE = 'TOGGLE_INFECTED_SURVIVOR_RESOLVE',

  REMOVE_SURVIVOR = 'DELETE_SURVIVOR',
  REMOVE_SURVIVOR_RESOLVE = 'DELETE_SURVIVOR_RESOLVE',
}

export interface Survivor {
  id?: string;
  name: string;
  description: string;
  age: number;
  bloodType: string;
  tags: Array<any>;
  infected: boolean;
  injured: boolean;
  canWork: boolean;
}

export interface SurvivorState {
  data: Survivor[];
  loading: boolean;
  selectedSurvivor: any;
  editingSurvivor: any;
  isEditing: boolean;
  percents: {
    healthy: any;
    infected: any;
  };
}
