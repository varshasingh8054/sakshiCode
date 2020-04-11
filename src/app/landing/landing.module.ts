import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ToastModule,
    DropdownModule
  ],
  providers: [AuthService, MessageService]
})
export class LandingModule { }
