import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieInfoComponent} from "./movie-info/movie-info.component";

const routes: Routes = [
  {path: 'list', component: MovieListComponent},
  {path: 'detail/:id', component: MovieInfoComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
