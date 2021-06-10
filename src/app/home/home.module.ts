import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilmsComponent } from './pages/films/films.component';
import { FilmComponent } from './pages/film/film.component';

import { SharedModule } from './../shared/shared.module';
import { MainComponent } from './pages/main/main.component'

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';


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
    NzCardModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class HomeModule { }
