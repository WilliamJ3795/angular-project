import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { ContactComponent } from './contact/contact.component'; 
import { CoursesComponent } from './courses/courses.component'; 
import { CourseStartComponent } from './courses/course-start/course-start.component'; 
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
