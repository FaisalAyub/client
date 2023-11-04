import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyChartComponent } from './pages/family-chart/family-chart.component';

const routes: Routes = [{
  path:'',
  component:FamilyChartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
