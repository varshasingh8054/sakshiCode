import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referring-doctor',
  templateUrl: './referring-doctor.component.html',
  styleUrls: ['./referring-doctor.component.scss']
})
export class ReferringDoctorComponent implements OnInit {
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
