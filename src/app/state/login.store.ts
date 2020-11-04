import { Store, StoreConfig } from '@datorama/akita';

export interface LoginState {
  email: string;
  password: string;
}

export function createInitialState(): LoginState {
  return {
    email: '',
    password: ''
  };
}

@StoreConfig({ name: 'login' })
export class LoginStore extends Store<LoginState> {
  constructor() {
    super(createInitialState());
  }
}
