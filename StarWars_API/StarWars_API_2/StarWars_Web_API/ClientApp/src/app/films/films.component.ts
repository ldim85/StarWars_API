import { Component, OnInit } from '@angular/core';
import { IFilms } from './films';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {


  films: IFilms[];


  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms()
      .subscribe(filmsAPI => this.films = filmsAPI,
        error => console.error(error));
  }

}
