import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
import { User } from 'src/app/auth/models/user.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserDataService } from 'src/app/core/store/user-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [MessageService]
})
export class PerfilComponent implements OnInit {

  ubmitted: boolean = false;
  loading: boolean = false;
  user: User | undefined;

  perfilForm = this.formBuilder.group({
    nome: ['', [Validators.required]],
    sobrenome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    modeDark: [false]
  });

  constructor(
    private formBuilder: FormBuilder,
    public userStore: UserDataService,
    private messageService: MessageService,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.loadPerfil();
  }

  get perfilFormControls() { return this.perfilForm.controls; }

  onUpload(event: UploadEvent) {

  }

  loadPerfil() {

    this.user = this.userStore.getUser();

    this.perfilForm.patchValue({
      nome: this.user?.firstName,
      sobrenome: this.user?.lastName,
      email: this.user?.email,
      modeDark: this.user?.modeDark
    })

  }

  save() {

    this.loading = true;

    const user: User = {
      id: 1,
      email: this.perfilFormControls.email.value ?? '',
      firstName: this.perfilFormControls.nome.value ?? '',
      lastName: this.perfilFormControls.sobrenome.value ?? '',
      modeDark: this.perfilFormControls.modeDark.value ?? false
    }

    this.userStore.setUser(user);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    this.loading = false;
  }

  changeTheme($event: any) {
    this.themeService.changeThemeForDark($event.checked);
  }

}