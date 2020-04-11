import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases.component';
import { NewCaseComponent } from './new-case/new-case.component';

const routes: Routes = [
  {path: '', component: CasesComponent},
  {path: 'newcase', component: NewCaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
