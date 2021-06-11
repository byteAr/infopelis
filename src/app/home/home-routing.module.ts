import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './pages/film/film.component';
import { MainComponent } from './pages/main/main.component';
import { FilmsComponent } from './pages/films/films.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'home', component: FilmsComponent},
      {path: 'film/:id', component: FilmComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
