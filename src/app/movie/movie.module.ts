import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieInfoComponent} from "./movie-info/movie-info.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [MovieListComponent, MovieInfoComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
