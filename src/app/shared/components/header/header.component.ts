import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { menuItems, menuItemsPerfil } from './menu-config';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('menu') menu!: Menu;
  @ViewChild('button') button!: ElementRef;
  menuItems: MenuItem[] = menuItems;
  menuItemsPerfil: MenuItem[] = menuItemsPerfil;

  constructor(public authService: AuthService) { }

  ngOnInit() { }

  onFocuButtonMeny(onFocus: boolean) {
    setTimeout(() => {
      this.button.nativeElement.blur();
      if (onFocus) {
        this.button.nativeElement.focus();
      }
    }, 0);
  }
}
