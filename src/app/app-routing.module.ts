import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { FilmComponent } from './components/film/film.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { ProfiloComponent } from './components/profilo/profilo.component';

const routes: Routes = [
  {
    path:'movies-popular',
    component: FilmComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'preferiti',
    component: PreferitiComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profilo',
    component: ProfiloComponent,
    canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
