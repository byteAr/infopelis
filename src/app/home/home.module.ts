import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomeRoutingModule } from './home-routing.module';
import { FilmComponent } from './pages/film/film.component';
import { FilmsComponent } from './pages/films/films.component';

import { SharedModule } from './../shared/shared.module';
import { MainComponent } from './pages/main/main.component'

import { NzIconModule } from 'ng-zorro-antd/icon';

import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { SeriesComponent } from './pages/series/series.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';






@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent,
    MainComponent,
    NovedadesComponent,
    SeriesComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NzIconModule,
    RouterModule,
    CardModule,
    ProgressSpinnerModule
  ]
  
})
export class HomeModule { }
