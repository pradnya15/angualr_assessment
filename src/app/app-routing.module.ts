import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  { path: '', component: LedgerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
