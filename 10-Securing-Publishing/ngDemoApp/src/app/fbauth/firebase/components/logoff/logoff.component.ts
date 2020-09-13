import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../firebase.auth.service';
import { SnackbarService } from '../../../../shared/snackbar/snackbar.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.scss'],
})
export class LogoffComponent implements OnInit {
  constructor(
    public fbauth: FirebaseAuthService,
    private sns: SnackbarService
  ) {}

  ngOnInit(): void {}

  logOff() {
    this.fbauth
      .logOff()
      .then(() =>
        this.sns.displayAlert('Firebase', 'You have been logged off')
      );
  }
}
