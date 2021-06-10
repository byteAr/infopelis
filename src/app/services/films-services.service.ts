import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Movies } from '../home/interfaces/movies.interface';



const enum endopoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv',
  search_film = '/search/movie'
}

@Injectable({
  providedIn: 'root'
})
export class FilmsServicesService { 
  
  private URL = 'https://api.themoviedb.org/3';

  private api_key = environment.apikeytmdb;

  private _films: any = [];

  get films(): Movies[] {
    return [...this._films]
  }

  constructor( private http: HttpClient) { }

  getLatestMovie(): Observable<Movies> {
    return this.http.get<any>(`${this.URL}${endopoint.latest}`, {
      params: {
        api_key : this.api_key
      }
    })
    .pipe(
      map(res => {
        console.log(res);
        return res.results
      })
    ) 
  }
  getNowPlaying(): Observable<Movies> {
    return this.http.get<any>(`${this.URL}${endopoint.now_playing}`, {
      params: {
        api_key : this.api_key
      }
    })
    .pipe(
      map(res => {
        return res.results
      })
    ) 
  }
  getOriginals(): Observable<Movies> {
    return this.http.get<any>(`${this.URL}${endopoint.originals}?api_key=${this.api_key}`, /* {
      params: {
        api_key : this.api_key
      }
    } */)
    .pipe(
      map(res => {
        return res.results
      })
    ) 
  }
  getPopular(): Observable<Movies> {
    return this.http.get<any>(`${this.URL}${endopoint.popular}`, {
      params: {
        api_key : this.api_key
      }
    })
    .pipe(
      map(res => {
        console.log(res)
        return res.results
      })
    )     
  }
  getTopRated(): Observable<Movies> {
    return this.http.get<any>(`${this.URL}${endopoint.top_rated}`, {
      params: {
        api_key : this.api_key
      }
    })
    .pipe(
      map(res => {
        return res.results
      })
    ) 
  }
  getTrending(): Observable<Movies> {
    return this.http.get<any>(`${this.URL}${endopoint.trending}`, {
      params: {
        api_key : this.api_key
      }
    })
    .pipe(
      map(res => {
        return res.results
      })
    ) 
  } 
  
  getFilms(film:string) {
    console.log(film);    
    this.http.get<any>(`${this.URL}${endopoint.search_film}?api_key=${this.api_key}&query=${film}`)
    .pipe(
      map(res => {
        return res.results               
      })
    )
    .subscribe(film => {
      console.log(film);
      this._films = film
    })    
  }




}
