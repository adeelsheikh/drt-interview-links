import { NgModule } from '@angular/core';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CourseListComponent } from './course-list/course-list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const redirectUnauthorizedToLanding = redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "courses", component: CourseListComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
