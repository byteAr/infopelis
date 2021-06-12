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






@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent,
    MainComponent
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
