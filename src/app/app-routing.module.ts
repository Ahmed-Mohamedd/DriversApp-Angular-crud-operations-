import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriversComponent } from './Components/drivers/drivers.component';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full' },
  {path:'home' , component:HomeComponent},
  {path:'drivers' , component:DriversComponent },
  {path:'create' , component:CreateComponent},
  {path:"edit/:id" , component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
