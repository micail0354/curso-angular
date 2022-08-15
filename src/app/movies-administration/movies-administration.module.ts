import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MovieDetailComponent,
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MoviesAdministrationModule { }
