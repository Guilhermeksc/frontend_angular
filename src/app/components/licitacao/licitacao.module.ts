import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicitacaoComponent } from './licitacao.component';
import { LicitacaoRoutingModule } from './licitacao-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LicitacaoRoutingModule,
    LicitacaoComponent,
  ],
})
export class LicitacaoModule {}
