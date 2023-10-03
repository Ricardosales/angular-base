import { Inject, Injectable } from '@angular/core';
import { ThemeStorageService } from '../store/theme-storage.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    constructor(@Inject(DOCUMENT) private document: Document,
        private themeStorage: ThemeStorageService) { }

    changeThemeForDark(state: boolean) {
        let theme = state ? 'dark' : 'light';
        this.themeStorage.setTheme(theme);

        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
        themeLink.href = 'lara-' + theme + '-indigo' + '.css';
    }
}
