import { Component, OnInit } from '@angular/core';
import { FilmsServicesService } from '../../../services/films-services.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  constructor(private filmService: FilmsServicesService) { }

  filmsNovedades: any[];

  ngOnInit(): void {
    this.filmService.getUpComing()
      .subscribe( (films) => {
        this.filmsNovedades = films
    })
  }

}
