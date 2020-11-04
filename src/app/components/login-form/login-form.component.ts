import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginStore} from '../../state/login.store';
import {LoginQuery} from '../../state/login.query';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  emailControl: FormControl = new FormControl();
  passwordControl: FormControl = new FormControl();


  // Manejo de estado
  loginStore = new LoginStore();
  loginQuery = new LoginQuery(this.loginStore);

  email$ = this.loginQuery.select(state => state.email);
  password$ = this.loginQuery.select(state => state.password);

  notEmpty$ = this.loginQuery.select(state => state.email !== '' && state.password !== '');

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
    this.emailControl.valueChanges.subscribe(value => {
      //this.email = value;
      this.loginStore.update({email: value});
    });
    this.passwordControl.valueChanges.subscribe(value => {
      //this.password = value;
      this.loginStore.update({password: value});
    });

    this.email$.subscribe(value => this.email = value);
    this.password$.subscribe(value => this.password = value);
  }

  onSubmit() {
    console.log(this.email, this.password);
    this.handleSubmit(this.email, this.password);
  }

  handleSubmit(email:string, password:string): void {
    //make ajax
  }

}
