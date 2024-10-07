import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { authGuard } from './guard/auth.guard';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [authGuard],
    children: [
      { path: 'product/list', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/edit/:id', component: ProductEditComponent },
    ],
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];
