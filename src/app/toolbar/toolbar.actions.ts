import {Action} from '@ngrx/store';

export const SET_TOOLBAR_CONTENT = 'SET_TOOLBAR_CONTENT';

export class SetToolBarContentAction implements Action {
  readonly type = SET_TOOLBAR_CONTENT;

  constructor(public payload: string) {
  }

}

export type ToolbarActions = SetToolBarContentAction;
