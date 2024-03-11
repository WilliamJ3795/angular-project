import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Course } from '../course.model';
import { CourseService } from '../course.service'; 


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: Course[]  = [];

  constructor(private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
   
  selectedRow!: number;
  searchText!: string;

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    }

  setHoveredRow(index: number) {
    this.selectedRow = index;
  }
}
