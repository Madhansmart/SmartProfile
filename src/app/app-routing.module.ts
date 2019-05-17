import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch:'full'},
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent, data : {animation : 'AboutPage'}},    
  {path : 'skills', component : SkillsComponent, data : {animation : 'SkillsPage'}},
  {path : 'contact', component : ContactComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
