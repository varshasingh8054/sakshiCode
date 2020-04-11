import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
import { routerTransition } from '../router.animation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [routerTransition()]


})
export class ForgotPasswordComponent implements OnInit {
  email: any;
  constructor(private authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
  }

  forgotPassword(formm:NgForm){
    console.log("themail>>>>>",this.email);
    const user = {
      email: this.email
    }
    this.authService.forgotPassword(user)
      .then(res => {
        if (res['status']=="1") {
          console.log("response", res);
          this.authService.storeUserData(res['token']);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res['message']
          });
          formm.reset();
        }
        else {
          console.log("in else");
          this.email = '';
          this.messageService.add({
            severity: 'success',
            summary: 'Error',
            detail: res['message']
          });
          formm.reset();
        }
      })
      .catch(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: "Email doesn't exist!"
        });
        formm.reset();
      });
  }
}
