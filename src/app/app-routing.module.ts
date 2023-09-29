import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth/guards/auth.guard';
import { LogoutComponent } from './auth/logout/logout.component';
import { PerfilComponent } from './features/perfil/perfil.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: 'perfil', component: PerfilComponent },
  
  { path: '', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
