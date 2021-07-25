import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsServicesService } from '../../services/films-services.service';
import {Subject} from 'rxjs'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  constructor( private filmsService: FilmsServicesService,
               private router: Router) { }

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = ''

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit(valor)
    })
  }

  teclaPresionada() {
    this.debouncer.next(this.termino)
  }

  buscar(miFormulario) {
    if( miFormulario.film.trim().length === 0){
      return
    }     
    this.filmsService.getFilms(miFormulario.film);
    this.router.navigateByUrl('/search');
  }

  /* novedades() {
    this.filmsService.getLatestMovie()
  }

  popularSeries() {
    this.filmsService.popularSeries()
  } */

  refresh() {
    this.filmsService.refreshFilms()
  }

}
