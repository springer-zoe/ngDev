import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-err',
  templateUrl: './login-err.component.html',
  styleUrls: ['./login-err.component.scss'],
})
export class LoginErrComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}

  ngOnInit(): void {}
}
