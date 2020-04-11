import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule,
    ToastModule,
  ],
  providers: [MessageService]
})
export class ForgotPasswordModule { }
