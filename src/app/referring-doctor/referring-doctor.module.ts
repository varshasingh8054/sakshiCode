import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferringDoctorRoutingModule } from './referring-doctor-routing.module';
import { ReferringDoctorComponent } from './referring-doctor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CasesComponent } from './cases/cases.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ReferringDoctorComponent, SidebarComponent, CasesComponent, ProfileDetailsComponent],
  imports: [
    CommonModule,
    ReferringDoctorRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class ReferringDoctorModule { }
