import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmsServicesService } from '../../services/films-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private filmsService: FilmsServicesService) { }

  ngOnInit(): void {
  }

  buscar(miFormulario) {
    if( miFormulario.film.trim().length === 0){
      return
    }     
    this.filmsService.getFilms(miFormulario.film);
  }

}
