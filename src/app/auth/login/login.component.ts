import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router) {

    this.redirect();
  }

  loginForm = this.formBuilder.group({
    email: ['ricardo@gmail.com', [Validators.required, Validators.email]],
    senha: ['teste', Validators.required]
  });

  ngOnInit(): void {

  }

  get loginFormControls() { return this.loginForm.controls; }

  login() {

    this.submitted = true;
    this.loading = true;

    if (!this.loginForm.valid) {
      this.loading = false;
      return;
    }

    const loginM: LoginModel = {
      email: this.loginFormControls.email.value!,
      senha: this.loginFormControls.senha.value!
    };

    this.authService.login(loginM).subscribe(() => {
      this.submitted = false;
      this.loading = false;
      this.redirect();
    });

  }

  logout() {
    this.authService.logout();
  }

  redirect() {
    if (this.authService.isLoggedIn()) {
      const redirectUrl = '';
      this.router.navigate([redirectUrl]);
    }
  }

}
