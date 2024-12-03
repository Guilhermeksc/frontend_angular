import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./app/components/home/home.component').then(m => m.HomeComponent) },
      { path: 'atas', loadComponent: () => import('./app/components/atas/atas.component').then(m => m.AtasComponent) },
      { path: 'licitacao', loadComponent: () => import('./app/components/licitacao/licitacao.component').then(m => m.LicitacaoComponent) },
      { path: 'contratos', loadComponent: () => import('./app/components/contratos/contratos.component').then(m => m.ContratosComponent) },
      { path: 'dispensa-eletronica', loadComponent: () => import('./app/components/dispensa-eletronica/dispensa-eletronica.component').then(m => m.DispensaEletronicaComponent) }
    ])
  ]
}).catch(err => console.error(err));
