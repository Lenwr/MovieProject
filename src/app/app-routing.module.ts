import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {MoviesDetailsComponent} from "./accueil/movies-details/movies-details.component";

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'movies/:id', component: MoviesDetailsComponent},
  {path: '', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
