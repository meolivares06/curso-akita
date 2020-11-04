import { Component, OnInit } from '@angular/core';
import { SessionQuery } from './state/session.query';
import {SessionStore} from './state/session.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'akita';
  myStore = new SessionStore();
  myQuery = new SessionQuery(this.myStore);

  // Estado completo
  fullState$ = this.myQuery.select();

  // Solo la propiedad token
  token$ = this.myQuery.select(state => state.token);

  // Propiedad computada
  isLoggedIn$ = this.myQuery.select(state => state.token !== '');
  ngOnInit(): void {
    this.myStore.update({
      name: this.title
    });
  }
}

