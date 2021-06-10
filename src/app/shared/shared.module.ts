import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

import { SwiperModule } from "swiper/angular";




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    FormsModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
