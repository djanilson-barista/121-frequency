export enum ActionTypes {
  INIT_APP = 'INIT',
  CREATE_SURVIVOR = 'CREATE_SURVIVOR',
  CREATE_SURVIVOR_RESOLVE = 'CREATE_SURVIVOR_RESOLVE',
  FETCH_SURVIVOR = 'FETCH_SURVIVOR',
  UPDATE_SURVIVOR = 'UPDATE_SURVIVOR',
  UPDATE_SURVIVOR_RESOLVE = 'UPDATE_SURVIVOR_RESOLVE',
  EDIT_SURVIVOR = 'EDIT_SURVIVOR',
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
  editingSurvivor: any;
  isEditing: boolean;
}
