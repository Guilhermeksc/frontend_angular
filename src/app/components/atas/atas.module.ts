import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtasRoutingModule } from './atas-routing.module';
import { AtasComponent } from './atas.component'; // Importação direta

@NgModule({
  imports: [
    CommonModule,
    AtasRoutingModule,
    AtasComponent, // Importando standalone diretamente
  ],
})
export class AtasModule {}
