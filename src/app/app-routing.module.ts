import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';


const routes: Routes = [
  {path: '' , redirectTo: '/students' , pathMatch: 'full'},
  {path: 'students' , component: StudentsComponent},
  {path: 'teachers' , component: TeachersComponent},
  {path: 'teachers/:id/:name' , component: TeacherDetailComponent},
  {path: "**" , component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
