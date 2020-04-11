import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'landing', loadChildren: './landing/landing.module#LandingModule'},
  { path: 'practiceadmin', loadChildren: './practice-admin/practice-admin.module#PracticeAdminModule', canActivate: [AuthGuard]},
  { path: 'assosiate', loadChildren: './assosiate-doctor/assosiate-doctor.module#AssosiateDoctorModule', canActivate: [AuthGuard]},
  { path: 'referring', loadChildren: './referring-doctor/referring-doctor.module#ReferringDoctorModule', canActivate: [AuthGuard]},
  { path: 'signup/:token', loadChildren: './signup/signup.module#SignupModule'},
  { path: 'forgotpassword', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'},
  { path: '', redirectTo: '/landing', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
