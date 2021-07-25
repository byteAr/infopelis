import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsServicesService } from '../../../services/films-services.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  idFilm: string;
  type: string;
  film: any;


  constructor( private activateRoute: ActivatedRoute,
                private filmsServices : FilmsServicesService) { }

  ngOnInit(): void {
    this.getFilm()
  }

  getFilm() {
    this.idFilm = this.activateRoute.snapshot.paramMap.get("id");
    this.type = this.activateRoute.snapshot.paramMap.get("type");
    this.film = this.filmsServices.getFilm(this.type, this.idFilm)
    .subscribe(resp => {
      this.film = resp
    })
    
    
  }

}
