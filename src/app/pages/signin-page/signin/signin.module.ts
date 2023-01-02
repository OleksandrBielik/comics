import { SigninFormComponent } from './../signin-form/signin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { AuthGuard } from 'src/app/shared/services/auth.guard';

@NgModule({
  declarations: [SigninComponent, SigninFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'signin', component: SigninComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [RouterModule, SigninComponent, SigninFormComponent],
})
export class SigninModule {}
