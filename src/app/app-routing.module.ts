import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { StudentComponent } from './pages/student/student/student.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.mudole').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        loadChildren: () => import('./pages/main/main.mudole').then(m => m.MainModule)
      }
    ]
  },
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        loadChildren: () => import('./pages/student/student.mudole').then(m => m.StudentModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
