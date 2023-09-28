import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ThemeStorageService } from './core/store/theme-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-base';
  themSelection: boolean = false;
  isLoggedIn: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document,
    private authService: AuthService,
    private themeStorage: ThemeStorageService) {

    let theme = themeStorage.getTheme();
    if (theme) {
      this.themSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themSelection);
    }
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.onAuthenticationChange().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light';
    this.themeStorage.setTheme(theme);

    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-indigo' + '.css';
  }
}
