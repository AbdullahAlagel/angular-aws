import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { StudentComponent } from './pages/student/student/student.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContentComponent } from './core/_layout';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/login/login.mudole').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: SignInComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/sign-in/sign-in.mudole').then((m) => m.SignInModule),
      },
    ],
  },
  {
    path: '',
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./pages/main/main.mudole').then((m) => m.MainModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./pages/student/student.mudole').then((m) => m.StudentModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/course/course.mudole').then((m) => m.CourseModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/users/users.mudole').then((m) => m.UserstModule),
      },
    ],
  },
  // {
  //   path: '',
  //   component: StudentComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'student',
  //       loadChildren: () => import('./pages/student/student.mudole').then(m => m.StudentModule)
  //     }
  //   ]
  // },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
