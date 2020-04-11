import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { routerTransition } from '../router.animation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  constructor(private messageService: MessageService, private route: ActivatedRoute,  
    private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  signupForm: FormGroup;
  userDetails: {};

  ngOnInit() {
    var token = this.route.snapshot.params["token"];
    console.log("param of edit", token);
    this.getDetail(token);
    this.signupForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['']
    });
  }

  getDetail(token){
    this.authService.getDetail(token).then(res=>{
      console.log("details", res);
      this.userDetails = res["data"];
      console.log("user details", this.userDetails);
      this.signupForm.patchValue({
        firstName: this.userDetails["firstName"],
        lastName: this.userDetails["lastName"],
        email: this.userDetails['email']
      });
    })
  }

  signUp(formm){
    if(! (formm.password == formm.confirmpassword)){
      console.log("in if");
      this.messageService.add({
        severity: "error",
        summary: " Error Message",
        detail: "Password do not match"
      });
    }
    else{
    const data = {
      firstName: formm.firstName,
      lastName: formm.lastName,
      email: formm.email,
      password: formm.password,
    };
    data['is_addDoctor'] = "true";
    console.log("data to send", data);
    this.authService
    .signUp(data)
    .then(res => {
      if (res["status"] == 1) {
        console.log("signup_data", res);
        this.messageService.add({
          severity: "success",
          summary: "Success Message",
          detail: "User Created"
        });
        // formm.reset();
        this.router.navigate(["landing"]);
      }
      else{
        this.messageService.add({
          severity: "error",
          summary: "Error Message",
          detail: res['message']
        });
        formm.reset();
      }
    })
    // formm.reset();
  }
}
navBtnLogin(){
  this.router.navigate(["landing"]);
}
}
