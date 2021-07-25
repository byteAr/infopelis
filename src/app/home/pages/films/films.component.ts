import { Component, Input, OnInit } from '@angular/core';
import { FilmsServicesService } from 'src/app/services/films-services.service';
import { Subscription } from 'rxjs'
import { Movies } from '../../interfaces/movies.interface';



@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  
@Input() films: any[] = [];  

  constructor(private filmsService: FilmsServicesService) { }

  ngOnInit(): void {
  }

  


}
