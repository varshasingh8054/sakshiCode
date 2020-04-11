import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {
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
