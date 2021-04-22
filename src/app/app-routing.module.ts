import { AlterarComponent } from './components/evento/alterar/alterar.component';
import { CadastrarComponent } from './components/evento/cadastrar/cadastrar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/evento/listar/listar.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'eventos',component: ListarComponent},
  {path: 'eventos/cadastrar',component: CadastrarComponent},
  {path: 'eventos/alterar/:id',component: AlterarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
