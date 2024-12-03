import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensaEletronicaComponent } from './dispensa-eletronica.component';

const routes: Routes = [
  { path: '', component: DispensaEletronicaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispensaEletronicaRoutingModule {}
