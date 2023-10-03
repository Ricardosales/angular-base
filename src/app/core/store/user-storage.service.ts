import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserDataService {
    private readonly STORAGE_KEY = 'app_default_user';

    constructor() { }

    // Armazena dados de usuário no localStorage
    setUser(userData: any): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(userData));
    }

    // Obtém dados de usuário do localStorage
    getUser(): any {
        const userData = localStorage.getItem(this.STORAGE_KEY);
        return userData ? JSON.parse(userData) : null;
    }

    // Remove os dados de usuário do localStorage
    removeUser(): void {
        localStorage.removeItem(this.STORAGE_KEY);
    }
}
