import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  @Output() onSubmit = new EventEmitter<User>();

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    console.log(this.authForm.get('email'));
    // this.onSubmit.emit(this.authForm.value);
  }
}
