import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssosiateDoctorComponent } from './assosiate-doctor.component';
import { CasesComponent } from './cases/cases.component';
import { PracticeManagementComponent } from './practice-management/practice-management.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
  { path: '', component: AssosiateDoctorComponent,
  children: [
    { path: 'cases', component: CasesComponent },
    { path: 'parcticeManagement', component: PracticeManagementComponent },
    { path: 'profile', component: ProfileDetailsComponent },
    { path: '', redirectTo: 'cases', pathMatch: 'prefix' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssosiateDoctorRoutingModule { }
