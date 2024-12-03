import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtasComponent } from './atas.component';

const routes: Routes = [
  { path: '', component: AtasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtasRoutingModule {}
