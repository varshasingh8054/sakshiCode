import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-practice-management',
  templateUrl: './practice-management.component.html',
  styleUrls: ['./practice-management.component.scss']
})
export class PracticeManagementComponent implements OnInit {
  constructor(private authService: AuthService,private messageService: MessageService) { }

  email: [''];
  firstName: [''];
  lastName: [''];
  data= {}
  assosiateDoc= [];
  referringDoc= [];

  ngOnInit()
  {
    this.getList();
  }

  getList(){
    this.authService.getDocList().then(res =>{
      console.log("doctors list______________", res);
      this.assosiateDoc = res['data']['associateDoc'];
      console.log("assosiate doc", this.assosiateDoc)
      this.referringDoc = res['data']['referringDoc'];
      console.log("referrind doc", this.referringDoc);
    })
  }

addAssosiate(){
  console.log("adding____", this.firstName, this.lastName, this.email)
  this.data["firstName"]= this.firstName;
  this.data['lastName']= this.lastName;
  this.data['email']= this.email;
  this.data['roles']= "associateDoctor";
  this.data['resend'] = "false";

  this.authService.addDoctor(this.data).then(res =>{
    console.log("response",res)
    if(res['status'] == 1){
      console.log("in if>>>>>>>>>>>>")
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res['message']
      });
    }
    else{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: res['message']
      })
    }
  });
  this.getList();
}


addReferring(){
  console.log("adding____", this.firstName, this.lastName, this.email)
  this.data["firstName"]= this.firstName;
  this.data['lastName']= this.lastName;
  this.data['email']= this.email;
  this.data['roles']= "referringDoctor";
  this.data['resend'] = "false";

  console.log("data", this.data)
  this.authService.addDoctor(this.data).then(res =>{
    console.log("response",res)
    if(res['status'] == 1){
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res['message']
      });
    }
    else{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: res['message']
      })
    }
  });
this.getList();
}

resend(data){
  console.log("resend data", data);
  let dataToSend = {}
  dataToSend['email'] = data.email;
  dataToSend['resend'] = "true";
  
  console.log("data", dataToSend)
  this.authService.addDoctor(dataToSend).then(res =>{
    console.log("response",res)
    if(res['status'] == 1){
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res['message']
      });
    }
    else{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: res['message']
      })
    }
  });
}

async remove(item){

  this.authService.deleteDoctor(item.email).then(res =>{
    console.log("response",res)
    if(res['status'] == 1){
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res['message']
      });
    }
    else{
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: res['message']
      })
    }
  });
 await this.getList();
}

}
