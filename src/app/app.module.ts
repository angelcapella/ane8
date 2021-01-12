import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { InformesViewComponent } from './informes-view/informes-view.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {ChartModule} from 'primeng/chart';




@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ProductsViewComponent,
    InformesViewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    ChartModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
