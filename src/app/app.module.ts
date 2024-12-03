import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Standalone components não são declarados aqui.
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'atas', loadComponent: () => import('./components/atas/atas.component').then(m => m.AtasComponent) },
      { path: 'licitacao', loadComponent: () => import('./components/licitacao/licitacao.component').then(m => m.LicitacaoComponent) },
      { path: 'contratos', loadComponent: () => import('./components/contratos/contratos.component').then(m => m.ContratosComponent) },
      { path: 'dispensa-eletronica', loadComponent: () => import('./components/dispensa-eletronica/dispensa-eletronica.component').then(m => m.DispensaEletronicaComponent) }
    ])
  ],
  bootstrap: [] // AppComponent será configurado em bootstrapApplication
})
export class AppModule {}
