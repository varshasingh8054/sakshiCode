import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

newCase(){
  console.log("new case");
  this.router.navigate(['/newcase']);
}
}
