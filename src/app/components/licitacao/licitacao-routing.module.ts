import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicitacaoComponent } from './licitacao.component';

const routes: Routes = [
  { path: '', component: LicitacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicitacaoRoutingModule {}
