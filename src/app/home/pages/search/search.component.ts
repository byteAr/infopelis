import { Component, OnInit } from '@angular/core';
import { FilmsServicesService } from '../../../services/films-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  get films() {
    return this.filmService.films; 
  }

  constructor(private filmService: FilmsServicesService) { }

  ngOnInit(): void {
  }

}
