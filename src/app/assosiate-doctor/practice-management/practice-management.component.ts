import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-practice-management',
  templateUrl: './practice-management.component.html',
  styleUrls: ['./practice-management.component.scss']
})
export class PracticeManagementComponent implements OnInit {
  assosiateDoc= [];
  referringDoc= [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
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


}
