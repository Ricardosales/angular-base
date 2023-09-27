import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-base';
  themSelection: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem("theme");
    if(theme) {
      this.themSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themSelection);
    }
  }

  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem("theme", theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-indigo' + '.css';
    console.log(themeLink.href);
  }
}
