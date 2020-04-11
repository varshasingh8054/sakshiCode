import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeAdminComponent } from './practice-admin.component';
import { PracticeManagementComponent } from './practice-management/practice-management.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { DraftCasesComponent } from './draft-cases/draft-cases.component';

const routes: Routes = [
  { path: '', component: PracticeAdminComponent,
  children: [
    { path: 'cases', loadChildren: './cases/cases.module#CasesModule'},
    { path: 'parcticeManagement', component: PracticeManagementComponent },
    { path: 'profile', component: ProfileDetailsComponent },
    { path: 'draft', component: DraftCasesComponent},
    { path: '', redirectTo: 'cases', pathMatch: 'prefix' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeAdminRoutingModule { }
