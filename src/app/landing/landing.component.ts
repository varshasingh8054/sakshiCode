import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { routerTransition } from '../router.animation';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [routerTransition()]
})
export class LandingComponent implements OnInit {
  public countries= [];
  statesGet=[];
  states: [];

  countryItem: any;
  imageUrl: String;
  selectedFiles: FileList;

  email: [''];
  password: [''];
  firstName: [''];
  lastName: [''];
  confirmpassword: [''];
  practiseName: [''];
  streetAdd1: [''];
  streetAdd2: [''];
  city: [''];
  state: [''];
  country: [''];
  postalCode: [''];
  phoneNumber: [''];
  
  loginForm = true;
  step1 = true;
  showCountry= true;
  showState= true;

  constructor(private authService: AuthService, private router: Router, 
    private messageService: MessageService, private uploadService: UploadService,)
   { }

  ngOnInit() {
    this.authService.getCountries().then(res =>{
      let response = res['data'];
      response.map(item => {
        this.countryItem =  item['country']
       this.countries.push(this.countryItem)
      })
    });
  }


  selectFile(event) {
    console.log("in select file")
    this.selectedFiles = event.target.files;
    var reader = new FileReader();
    reader.onload = (event1: any) => {
    this.imageUrl = event1.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }


  getState(){
    if(this.country === undefined){
      this.showCountry = true;
    }
    else{
    this.showCountry = false;}
    this.authService.getState(this.country).then(res =>{
      this.states = res['data'];
    });
  }


  login(formm:NgForm){
    const user = {
      email: this.email,
      password: this.password
    };

    if (user.email && user.password) {
      this.authService
        .login(user)
        .then(res => {
          console.log("login res", res);
          
          if ((res["status"]==1) && (res['data']['roles'] != 'admin') ) {
            console.log("in if",res['data']['roles'] );
           
            this.messageService.add({
              severity: "success",
              summary: "Success Message",
              detail: "User logged in"
            });
            this.authService.storeUserData(res['data']["accessToken"]);

            if(res['data']['roles'] == 'associateDoctor')
            { this.router.navigate(["assosiate"]);}

            else if(res['data']['roles'] == 'referringDoctor')
            { this.router.navigate(["referring"]);}

            else
            { this.router.navigate(["practiceadmin"]);}
           
            formm.reset();
          }
          else{
            this.messageService.add({
              severity: "error",
              summary: " Error Message",
              detail: "Wrong Email or password"
            });
            localStorage.clear();
          }
            formm.reset();
          
        })
        .catch(err => {
          this.messageService.add({
            severity: "error",
            summary: " Error Message",
            detail: "Invalid Email or Password"
          });
          formm.reset();
        });
    } else {
      this.messageService.add({
        severity: "error",
        summary: " Error"
      });
      formm.reset();
    }
  }

  signUp_step1(){
    if(! (this.password == this.confirmpassword)){
      console.log("in if");
      this.messageService.add({
        severity: "error",
        summary: " Error Message",
        detail: "Password do not match"
      });
    }
   
    else{ this.step1 = false; }
    console.log("step1 success", this.firstName, this.lastName);
  }

  async signUp(formm:NgForm){
    console.log("final step", this.lastName, this.firstName);
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      practiseName: this.practiseName,
      streetAdd1: this.streetAdd1,
      streetAdd2: this.streetAdd2,
      city: this.city,
      state: this.state,
      country: this.country,
      postalCode: this.postalCode,
      phoneNumber: this.phoneNumber
    };

    // ImageUrl Added here=================
    const file = this.selectedFiles ? this.selectedFiles.item(0) : '';
    if (file) {
      let dataS = await this.uploadService.uploadFile(file);
      this.imageUrl = dataS.Location;
    }
    data["imageUrl"] = this.imageUrl;
    console.log("data to signup", data);

    this.authService
    .signUp(data)
    .then(res => {
      if (res["status"] == 1) {
        console.log("signup_data", res);
        this.router.navigate(["landing"]);
        this.messageService.add({
          severity: "success",
          summary: "Success Message",
          detail: "User Created"
        });
        formm.reset();
        this.loginForm = true;
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

  }

  formChange(){
    this.loginForm = !this.loginForm;
  }

  stepChange(){
    console.log(" In stepChange", this.step1);
    this.step1 = !this.step1;
    console.log("stepChange", this.step1);
  }

  textHide(){
    if(this.state === undefined){
      this.showState = true;
    }
    else{
    this.showState = false;}
  }

  navBtnLogin(){
    this.loginForm = true;
  }
}
