import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeAdminRoutingModule } from './practice-admin-routing.module';
import { PracticeAdminComponent } from './practice-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PracticeManagementComponent } from './practice-management/practice-management.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CasesModule } from './cases/cases.module';
import { DraftCasesComponent } from './draft-cases/draft-cases.component';

@NgModule({
  declarations: [PracticeAdminComponent, SidebarComponent, PracticeManagementComponent, ProfileDetailsComponent, DraftCasesComponent],
  imports: [
    CommonModule,
    PracticeAdminRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CasesModule
  ],
  providers: [MessageService],
})
export class PracticeAdminModule { }
