import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FirebaseAuthService } from './fbauth/firebase/firebase.auth.service';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private auth: FirebaseAuthService) {}

  title: string = environment.title;

  loggedIn$ = this.auth
    .isAuthenticated()
    .pipe(tap((loggedin) => console.log('logged in', loggedin)));

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
