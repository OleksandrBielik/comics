import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  animations: [
    trigger('error', [
      state('start', style({ height: 0, opacity: 0 })),
      state('end', style({ height: 'auto', opacity: 1 })),
      transition('void => *', [style({ height: 0, opacity: 0 }), animate(350)]),
    ]),
  ],
})
export class SigninFormComponent implements OnInit {
  constructor(private authService: AuthService) {}
  form!: FormGroup;
  errorState!: 'start';

  onSubmit(): void {
    this.authService.login(this.form.value).subscribe(() => this.form.reset);
  }

  getErrors(control: string) {
    return this.form.get(control)?.errors;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }
}
