import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ThemeStorageService } from './core/store/theme-storage.service';
import { UserDataService } from './core/store/user-storage.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-base';
  themSelection: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService,
    private userStore: UserDataService,
    private themeService: ThemeService) {

    let theme = this.userStore.getUser();
    if (theme) {
      this.themSelection = theme.modeDark ? true : false;
      console.log(this.themSelection);
      this.themeService.changeThemeForDark(this.themSelection);
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.onAuthenticationChange().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
