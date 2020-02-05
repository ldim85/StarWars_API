import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FilmsService } from './films/films.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FilmsComponent,
    PlanetsComponent,
    PeopleComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'films', component: FilmsComponent },
      { path: 'planets', component: PlanetsComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'species', component: SpeciesComponent },
      { path: 'starships', component: StarshipsComponent },
      { path: 'vehicles', component: VehiclesComponent }
    ])
  ],
  providers: [FilmsService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
