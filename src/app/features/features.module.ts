import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
