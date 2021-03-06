import {  Component, Input, OnInit } from "@angular/core";
import { FilmsServicesService } from '../../services/films-services.service';
import { Movies } from '../../home/interfaces/movies.interface';
import SwiperCore, {
  EffectFade,
  Swiper ,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  
} from 'swiper/core';

SwiperCore.use([EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]);



@Component({
  selector: 'app-carousel', 
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

 @Input() films: any[] = []

  constructor( private filmsService : FilmsServicesService) {}
  

  ngOnInit() {
    
  }
}
