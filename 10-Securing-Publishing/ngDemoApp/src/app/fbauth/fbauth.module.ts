import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './firebase/components/login/login.component';
import { RegisterComponent } from './firebase/components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoginErrComponent } from './firebase/components/login-err/login-err.component';
import { LogoffComponent } from './firebase/components/logoff/logoff.component';

const forms = [
  LoginComponent,
  RegisterComponent,
  LoginErrComponent,
  LogoffComponent,
];

@NgModule({
  declarations: forms,
  exports: forms,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class FBAuthModule {}
