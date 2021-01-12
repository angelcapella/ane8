import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { InformesViewComponent } from './informes-view/informes-view.component';
import { ProductsViewComponent } from './products-view/products-view.component';

const routes: Routes = [
  {path:'home' , component:HomeViewComponent},
  {path:'products' , component:ProductsViewComponent},
  {path:'informes' , component:InformesViewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
