import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssosiateDoctorRoutingModule } from './assosiate-doctor-routing.module';
import { AssosiateDoctorComponent } from './assosiate-doctor.component';
import { CasesComponent } from './cases/cases.component';
import { PracticeManagementComponent } from './practice-management/practice-management.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AssosiateDoctorComponent, CasesComponent, PracticeManagementComponent, ProfileDetailsComponent, SidebarComponent],
  imports: [
    CommonModule,
    AssosiateDoctorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class AssosiateDoctorModule { }
