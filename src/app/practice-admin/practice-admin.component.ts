import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-admin',
  templateUrl: './practice-admin.component.html',
  styleUrls: ['./practice-admin.component.scss']
})
export class PracticeAdminComponent implements OnInit {
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
