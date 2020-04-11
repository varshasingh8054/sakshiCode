import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assosiate-doctor',
  templateUrl: './assosiate-doctor.component.html',
  styleUrls: ['./assosiate-doctor.component.scss']
})
export class AssosiateDoctorComponent implements OnInit {

  collapsedEvent: boolean;
  constructor(private router: Router) { }


  ngOnInit() {
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/landing']);
    return false;
  }

  receiveCollapsed($event) {
    console.log("in layout"); 
    this.collapsedEvent = $event;
}

}
