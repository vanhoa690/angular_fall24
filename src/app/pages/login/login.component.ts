import { Component, inject } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  toast = inject(HotToastService);
  router = inject(Router);

  handleSubmit(values: User) {
    this.authService.loginUser(values).subscribe((data) => {
      localStorage.setItem('token', data.accessToken);
      this.toast.success('Done');
      this.router.navigateByUrl('/');
    });
  }
}
