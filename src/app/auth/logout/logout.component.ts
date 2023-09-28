import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-logout',
  template: ``
})
export class LogoutComponent {

  constructor(private router: Router, private auth: AuthService) {
    auth.logout();
    router.navigate(['login']);
  }

}
