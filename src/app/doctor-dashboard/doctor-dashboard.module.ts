import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CasesComponent } from './cases/cases.component';
import { PracticeManagementComponent } from './practice-management/practice-management.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorDashboardComponent, SidebarComponent, CasesComponent, PracticeManagementComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule,
    FormsModule
  ]
})
export class DoctorDashboardModule { }
