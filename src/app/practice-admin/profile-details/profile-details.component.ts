import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  profileDetails : {}
  name: any;
  rayxId: any;
  changePassword = false;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private messageService: MessageService) { }
  editForm: FormGroup;
  ngOnInit() {

    this.editForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['',  Validators.required],
        firstName: ['',  Validators.required],
        lastName: [''],
        confirmpassword: [''],
        practiseName: ['',  Validators.required],
        streetAdd1: ['',  Validators.required],
        streetAdd2: [''],
        city: ['',  Validators.required],
        state: ['',  Validators.required],
        country: ['', Validators.required],
        postalCode: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      
    });
    this.getProfile();
  }

  getProfile(){
    this.authService.getProfile().then(res =>{
      console.log("getting detail>>>>>>>",res)
      this.profileDetails = res['data'];
      console.log("profile detail object_________", this.profileDetails)
      this.editForm.patchValue({
        email: this.profileDetails["email"],
        password: this.profileDetails["password"],
        firstName: this.profileDetails["firstName"],
        lastName: this.profileDetails['lastName'],
        confirmpassword: this.profileDetails['password'],
        practiseName: this.profileDetails['practiseName'],
        streetAdd1: this.profileDetails['streetAdd1'],
        streetAdd2: this.profileDetails['streetAdd2'],
        state: this.profileDetails['state'],
        city: this.profileDetails['city'],
        country: this.profileDetails['country'],
        postalCode: this.profileDetails['postalCode'],
        phoneNumber: this.profileDetails['phoneNumber']
      });
      this.name = (this.profileDetails["firstName"].charAt(0).toUpperCase() + this.profileDetails['firstName'].slice(1))
      +" " +  (this.profileDetails["lastName"].charAt(0).toUpperCase() + this.profileDetails['lastName'].slice(1));
      this.rayxId = this.profileDetails['rayxId'];
    });
  }

 edit(data) {
    this.profileDetails = data;
    let dataToSend = this.profileDetails
    console.log("data to send", dataToSend)

    this.authService.editProfile(dataToSend).then(res => {
      console.log("edited________response____",res);

      if (res["status"] == 1) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Details edited'
        })
        this.getProfile();
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

  change(){
    this.changePassword = !this.changePassword;
    console.log("chnage password_____________", this.changePassword)
  }
}
