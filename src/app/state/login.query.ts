import { Query } from '@datorama/akita';
import {LoginState, LoginStore } from './login.store';

export class LoginQuery extends Query<LoginState> {
  constructor(protected store: LoginStore) {
    super(store);
  }
}
