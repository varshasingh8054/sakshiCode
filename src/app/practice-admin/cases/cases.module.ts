import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { NewCaseComponent } from './new-case/new-case.component';
import { CasesComponent } from './cases.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import { AuthService } from '../../auth.service';
import { MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [NewCaseComponent, CasesComponent],
  imports: [
    CommonModule,
    CasesRoutingModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    InputTextareaModule,
    FileUploadModule,
    ToastModule
  ],
  providers: [AuthService, MessageService]
})
export class CasesModule { }
