import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"login", component:LoginComponent},
  {path:"chat", component:ContentComponent},
  {path:"", component:LoginComponent},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
