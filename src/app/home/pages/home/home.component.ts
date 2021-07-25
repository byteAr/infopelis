import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmsServicesService } from '../../../services/films-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  filmsPopulares: any[];
  constructor(private filmService : FilmsServicesService) { }

  ngOnInit(): void {
    this.filmService.getTrending()
     .subscribe((popular) => {
       console.log(popular);
       this.filmsPopulares = popular
     })
  }

  ngOnDestroy() {

  }

}
