import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosComponent } from './contratos.component';
import { ContratosRoutingModule } from './contratos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContratosRoutingModule,
    ContratosComponent,
  ],
})
export class ContratosModule {}
