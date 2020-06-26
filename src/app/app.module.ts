import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferanceVariableComponent } from './template-referance-variable/template-referance-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfSwitchForComponent } from './ng-if-switch-for/ng-if-switch-for.component';
import { DataShareBetweenComComponent } from './data-share-between-com/data-share-between-com.component';
import { PipesComponent } from './pipes/pipes.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailListComponent } from './student-detail-list/student-detail-list.component';

import { StudentService }  from './student.service';
import { MangerDetailsComponent } from './manger-details/manger-details.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TemplateReferanceVariableComponent,
    TwoWayBindingComponent,
    NgIfSwitchForComponent,
    DataShareBetweenComComponent,
    PipesComponent,
    StudentListComponent,
    StudentDetailListComponent,
    MangerDetailsComponent,
    TeachersComponent,
    StudentsComponent,
    PageNotFoundComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
