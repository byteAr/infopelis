import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map, tap} from 'rxjs/operators'
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
  search = '/search/multi',
  getFilm = '/movie/',
  popular_series = '/tv/popular'
}

@Injectable({
  providedIn: 'root'
})
export class FilmsServicesService { 
  
  private URL = 'https://api.themoviedb.org/3';

  private api_key = environment.apikeytmdb;

  private _films: any = [];

  get films() {
    return [...this._films]
  }

  constructor( private http: HttpClient) { }

  getLatestMovie() {
    return this.http.get<any>(`${this.URL}${endopoint.latest}`, {
      params: {
        api_key : this.api_key
      }
    })
    .pipe(
      map(res => {        
        return res.results
      })
    ) 
    .subscribe(film => {
      this._films = film
    })
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

  popularSeries() {
    return this.http.get<any>(`${this.URL}${endopoint.popular_series}?api_key=${this.api_key}`, /* {
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

  getPopular() {
    return this.http.get<any>(`${this.URL}${endopoint.popular}`, {
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
  getTopRated() {
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
  getTrending() {
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
  
  refreshFilms() {
    this.http.get<any>(`${this.URL}${endopoint.latest}?api_key=${this.api_key}`)
    .pipe(
      map(res => {
        return res.results               
      })
    )
    .subscribe(film => {
      
      this._films = film
    })  
  }
  
  getFilms(film:string) {
    console.log(film);    
    this.http.get<any>(`${this.URL}${endopoint.search}?api_key=${this.api_key}&query=${film}`)
    .pipe(
      map(res => {
        return res.results               
      })
    )
    .subscribe(film => {
      
      this._films = film
    })    
  }
  getSearch(film:string) {
    return this.http.get<any>(`${this.URL}${endopoint.search}?api_key=${this.api_key}&query=${film}`)
    .pipe(
      map(res => {
        return res.results               
      })
    )    
  }

  

  getFilm(type:string, id: string) {
    return this.http.get<any>(`${this.URL}/${type}/${id}?api_key=${this.api_key}`)  
  }

  getUpComing() {
    return this.http.get<any>(`${this.URL}${endopoint.upcoming}`, {
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



}
