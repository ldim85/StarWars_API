import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFilms } from './films';

@Injectable()
export class FilmsService {

  private apiURL = "api/films";
    

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  getFilms(): Observable<IFilms[]> {
    return this.http.get<IFilms[]>(this.apiURL);


    } 


}
