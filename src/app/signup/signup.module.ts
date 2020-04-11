import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule} from 'primeng/toast';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [AuthService, MessageService]
})
export class SignupModule { }
