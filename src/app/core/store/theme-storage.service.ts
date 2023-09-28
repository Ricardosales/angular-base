import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeStorageService {
    private readonly STORAGE_KEY = 'app_default_theme';

    constructor() { }

    // Armazena dados de usuário no localStorage
    setTheme(themeData: any): void {
        localStorage.setItem(this.STORAGE_KEY, themeData);
    }

    // Obtém dados de usuário do localStorage
    getTheme(): any {
        return localStorage.getItem(this.STORAGE_KEY);
    }

    // Remove os dados de usuário do localStorage
    removeTheme(): void {
        localStorage.removeItem(this.STORAGE_KEY);
    }
}
