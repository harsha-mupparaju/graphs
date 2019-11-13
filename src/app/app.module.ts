import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
  
import {CustomMaterialModule} from '../app/mat-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartComponent } from './barchart/barchart.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { ChartToolbarComponent } from './chart-toolbar/chart-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    CategoryComponent,
    ChartToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
