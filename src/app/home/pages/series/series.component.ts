import { Component, OnInit } from '@angular/core';
import { FilmsServicesService } from '../../../services/films-services.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesFilms: any[];

  constructor(private serviceFilm : FilmsServicesService) { }

  ngOnInit(): void {
    this.serviceFilm.popularSeries()
    .subscribe( (series) => {
      console.log(series);
      this.seriesFilms = series
    })
  }

}
