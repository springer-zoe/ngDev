import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginErrComponent } from '../../fbauth/firebase/components/login-err/login-err.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  displayAlert(title: string, msg: string) {
    this.snackBar.open(title, msg, {
      duration: 2000,
    });
  }

  displayComponent(msg: string) {
    this.snackBar.openFromComponent(LoginErrComponent, {
      data: msg,
      duration: 2000,
    });
  }
}
