import { Component, OnInit } from '@angular/core';
import { FilmsServicesService } from '../../../services/films-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  filmsSugeridos: any;
  showSugerencias: boolean = true;

  constructor( private filmService: FilmsServicesService) { }

  ngOnInit(): void {
  }

  sugerencia( termino: string) {
    this.showSugerencias=true;
    if(termino.length == 0){
      this.showSugerencias = false;
    }
    this.filmService.getSearch(termino)
    .subscribe( films => {
      this.filmsSugeridos = films.splice(0,4),
      (err) => this.filmsSugeridos = [];
    })
  }

  ocultarSugerencias() {
    this.showSugerencias = false
  }

}
