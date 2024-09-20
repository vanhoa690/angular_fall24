import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleLogin() {
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        // luu token vao locaStorgae
        localStorage.setItem('token', data.accessToken);
        this.router.navigateByUrl('/');
      },
      error: () => alert('Error'),
    });
  }
}
