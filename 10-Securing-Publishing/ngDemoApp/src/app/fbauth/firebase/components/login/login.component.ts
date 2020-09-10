import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../../firebase-auth.service';
import { LoginCredentials } from '../../credential.model';
import { SnackbarService } from '../../../../shared/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private as: FirebaseAuthService, private sns: SnackbarService) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  logIn(cred: LoginCredentials) {
    this.as.logOn(cred).then(
      (result) => {
        console.log('logged in', result);
      },
      (err) => {
        this.sns.displayComponent(err.message);
      }
    );
  }
}
