import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispensaEletronicaComponent } from './dispensa-eletronica.component';
import { DispensaEletronicaRoutingModule } from './dispensa-eletronica-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DispensaEletronicaRoutingModule,
    DispensaEletronicaComponent,
  ],
})
export class DispensaEletronicaModule {}
