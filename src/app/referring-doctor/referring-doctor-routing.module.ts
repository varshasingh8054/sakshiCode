import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferringDoctorComponent } from './referring-doctor.component';
import { CasesComponent } from './cases/cases.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
  { path: '', component: ReferringDoctorComponent,
  children: [
    { path: 'cases', component: CasesComponent },
    { path: 'profile', component: ProfileDetailsComponent },
    { path: '', redirectTo: 'cases', pathMatch: 'prefix' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferringDoctorRoutingModule { }
