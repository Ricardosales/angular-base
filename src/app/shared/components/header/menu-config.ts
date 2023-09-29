// menu-config.ts
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/auth.service';
import { UserDataService } from 'src/app/core/store/user-storage.service';

export const menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: 'dashboard' },
    {
        label: 'Cadastros',
        icon: 'pi pi-briefcase',
        items: [
            {
                label: 'Usuários',
                icon: 'pi pi-fw pi-users'
            }
        ]
    }
];

export const menuItemsPerfil: MenuItem[] = [
    { label: '', visible: false },
    { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['perfil'] },
    { separator: true },
    { label: 'Sair', icon: 'pi pi-fw pi-power-off', routerLink: ['logout'] }
];

