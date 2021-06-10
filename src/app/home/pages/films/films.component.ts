import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmsServicesService } from 'src/app/services/films-services.service';
import { Subscription } from 'rxjs'
import { Movies } from '../../interfaces/movies.interface';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  trending: Movies;
  popular: Movies;
  nowPlaying: Movies;
  originals: Movies;
  latest: Movies;
  topRated: Movies;


  get films(): Movies[] {
    return this.filmsService.films;
  }

  constructor(private filmsService: FilmsServicesService) { }

  ngOnInit(): void {
    this.filmsService.getPopular()
      .subscribe( data => {
        this.popular = data
      });
  }

  ngOnDestroy() : void {
    this.subs.map(s => s.unsubscribe())
  }

  


}
