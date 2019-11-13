import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path:'bar-chart',component:BarchartComponent},
  {path:'category',component: CategoryComponent},
  {path:'category/:id',component:CategoryComponent}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BarchartComponent]
