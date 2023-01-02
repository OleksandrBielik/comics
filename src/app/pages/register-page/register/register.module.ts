import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './../register-form/register-form.component';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [RouterModule, RegisterComponent, RegisterFormComponent],
})
export class RegisterModule {}
