import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AtasComponent } from './components/atas/atas.component';
import { LicitacaoComponent } from './components/licitacao/licitacao.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { DispensaEletronicaComponent } from './components/dispensa-eletronica/dispensa-eletronica.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'atas', component: AtasComponent },
  { path: 'licitacao', component: LicitacaoComponent },
  { path: 'contratos', component: ContratosComponent },
  { path: 'dispensa-eletronica', component: DispensaEletronicaComponent }
];
