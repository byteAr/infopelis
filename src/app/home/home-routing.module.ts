import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './pages/film/film.component';
import { MainComponent } from './pages/main/main.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { SeriesComponent } from './pages/series/series.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'detail/:type/:id', component: FilmComponent},
      {path: 'novedades', component: NovedadesComponent},
      {path: 'series', component: SeriesComponent},
      {path: 'search', component: SearchComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
