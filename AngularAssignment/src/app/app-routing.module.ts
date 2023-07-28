import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{StudentloginComponent} from "./studentlogin/studentlogin.component";
import{TeacherloginComponent} from "./teacherlogin/teacherlogin.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {TeacherAdminComponent} from "./teacher-admin/teacher-admin.component"
import { AuthGuard } from './guard/auth.guard';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  { path: 'student', component: StudentloginComponent },
{ path: 'teacher', component: TeacherloginComponent},
{ path: '', component: WelcomePageComponent},
{ path: 'viewstudent/:id', component: ViewstudentComponent},
{ path: 'teacherAdmin', component: TeacherAdminComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
