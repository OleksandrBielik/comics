import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  constructor(private authService: AuthService) {}
  form!: FormGroup;

  onSubmit(): void {
    this.authService
      .registration(this.form.value)
      .subscribe(() => this.form.reset);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
