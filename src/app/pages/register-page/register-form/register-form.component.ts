import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  animate,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  animations: [
    trigger('error', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        sequence([
          animate('0.1s ease-in', style({ transform: 'translateY(0)' })),
          animate('0.3s ease', style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
})
export class RegisterFormComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  form!: FormGroup;
  errorState!: 'start';
  error$!: Subject<string>;
  submited = false;
  disabledClass: any = { 'background-color': 'gray' };

  onSubmit(): void {
    this.submited = true;
    this.authService.registration(this.form.value).subscribe({
      next: () => {
        localStorage.setItem('email', this.form.value.email);
        this.form.reset();
        this.submited = true;
        this.router.navigate(['characters']);
      },
      error: () => (this.submited = false),
    });
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
