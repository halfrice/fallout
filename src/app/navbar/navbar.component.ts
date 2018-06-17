import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

    this.username.valueChanges.subscribe((value: string) => {
      console.log('Username value changed to: ', value);
    });

    this.password.valueChanges.subscribe((value: string) => {
      console.log('Password value changed to: ', value);
    });
    this.loginForm.valueChanges.subscribe((form: any) => {
      console.log('Form changed to: ', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Submitted form with Username: '+form.username+' and Password: '+form.password);
  }

}
