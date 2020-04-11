import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit {
  services: [];
  delivery: [];
  assosiateDoc: [];
  refDoc: [];
  practiseName: "";
  firstName: [''];
  lastName: [''];
  dob: [''];
  gender: [''];
  studyDate: [''];
  doctor: [''];
  referringDoctor: [''];
  radiologist: [''];
  caseFiles: [''];
  notesToRadiologist: [''];
  additionalNotes: [''];
  studyPurpose: [''];
  service: [];
  deliveryType: ['']
  uploadedFiles: any[] = [];

  constructor(private authService: AuthService,  private router: Router, 
    private messageService: MessageService) { }
  
  formInitial = true;
  step1 = true;
  submitted1 = false;
  step2 = false;
  submitted2 = false;
  step3 = false;
  submitted3 = false;
  step4 = false;

  ngOnInit() {
    // this.getData();
  }

  // getData(){
  //   console.log("form data>>>>>>>>>>>>>>>>>>.")
  //   this.authService.getData().then(res => {
  //     console.log("response", res);
  //     this.services = res['data']['service'];
  //     this.delivery = res['data']['delivery'];
  //     this.practiseName = res['data']['practiseName'];
  //     this.assosiateDoc = res['data']['associateDoc'];
  //     this.refDoc = res['data']['referringDoc'];
  //     console.log("services and delivery", this.services, this.delivery);
  //   })
  // }

  // details(formm: NgForm){
  //   this.submitted1 = this.step1 = this.step2 = true;
  //   this.formInitial = false;
  //   console.log("details of patient", this.firstName, this.gender, this.studyDate, this.dob, this.doctor)
  // }

  // notes(formm: NgForm){
  //   this.submitted1 = false;
  //   this.step3 = this.submitted2 = true;
  //   console.log("notes", this.studyPurpose, this.notesToRadiologist, this.additionalNotes);
  // }

  // Service(formm: NgForm){
  //   this.submitted2 = false;
  //   this.step4 = this.submitted3 = true;
  //   console.log("service", this.service, this.deliveryType)
  // }

  // onUpload(event) {
  //   for(let file of event.files) {
  //       this.uploadedFiles.push(file);
  // }
  // console.log("files uploaded", this.uploadedFiles)
  // }

  // files(formm: NgForm){
  //   console.log("files", this.caseFiles);
  //   const data = {
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     dob: this.dob,
  //     gender: this.gender,
  //     studyDate: this.studyDate,
  //     doctor: this.doctor,
  //     referringDoctor: this.referringDoctor,
  //     radiologist: this.radiologist,
  //     caseFiles: this.caseFiles,
  //     notesToRadiologist: this.notesToRadiologist,
  //     additionalNotes: this.additionalNotes,
  //     studyPurpose: this.studyPurpose,
  //     service: this.service,
  //     deliveryType: this.deliveryType
  //   };
  //   data['isDraft'] = false;
  //   console.log("data to save", data);
  //   this.authService
  //   .editProfile(data)
  //   .then(res => {
  //     console.log("res",res)
  //     if (res["status"] == 1) {
  //       console.log("response data", res);
  //       this.messageService.add({
  //         severity: "success",
  //         summary: "Success Message",
  //         detail: "Case Created"
  //       });
  //       formm.reset();
  //       this.router.navigate(['/practiceadmin/cases']);
  //     }
  //     else{
  //       this.messageService.add({
  //         severity: "error",
  //         summary: "Error Message",
  //         detail: res['message']
  //       });
  //       formm.reset();
  //     }
  //   })
  // }

  // draft(){
  //   const data = {
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     dob: this.dob,
  //     gender: this.gender,
  //     studyDate: this.studyDate,
  //     doctor: this.doctor,
  //     referringDoctor: this.referringDoctor,
  //     radiologist: this.radiologist,
  //     caseFiles: this.caseFiles,
  //     notesToRadiologist: this.notesToRadiologist,
  //     additionalNotes: this.additionalNotes,
  //     studyPurpose: this.studyPurpose,
  //     service: this.service,
  //     deliveryType: this.deliveryType
  //   };
  //   data['isDraft'] = true;
  //   console.log("data to save", data);
  //   this.authService
  //   .addCase(data)
  //   .then(res => {
  //     console.log("res",res);
  //     if (res["status"] == 1) {
  //       console.log("response data", res);
  //       this.messageService.add({
  //         severity: "success",
  //         summary: "Success Message",
  //         detail: "Case saved as draft"
  //       });
  //       this.router.navigate(['draft']);
  //     }
  //     else{
  //       this.messageService.add({
  //         severity: "error",
  //         summary: "Error Message",
  //         detail: res['message']
  //       });
  //     }
  //   })
  // }

  // Step1(){
  //   this.formInitial = this.step1 = true;
  //   this.submitted1 = this.submitted2 = this.submitted3 = false;
  //   this.step2 = this.step4 = this.step3 = false;
  // }

  // Step2(){
  //   this.submitted1 = this.step2 = true;
  //   this.formInitial = this.submitted2 = this.submitted3 = false;
  //   this.step1 = this.step4 = this.step3 = false;
  // }
  // Step3(){
  //   this.submitted2 = this.step3 = true;
  //   this.submitted1 = this.formInitial = this.submitted3 = false;
  //   this.step1 = this.step2 = this.step4 = false;
  // }
  // Step4(){
  //   this.submitted3 = this.step4 = true;
  //   this.submitted1 = this.submitted2 = this.formInitial = false;
  //   this.step1 = this.step2 = this.step3 = false;
  // }
  
}

