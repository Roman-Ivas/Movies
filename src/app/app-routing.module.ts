import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WaittingComponent } from './waitting/waitting.component';

const routes: Routes = [
  {path:"",component:WaittingComponent},
  {path:"about",component: AboutComponent,runGuardsAndResolvers:'paramsOrQueryParamsChange'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
