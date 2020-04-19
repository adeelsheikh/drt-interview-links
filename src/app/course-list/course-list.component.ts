import { Component, OnInit } from '@angular/core';

import { CourseService } from '../core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: [];
  filtered: [];
  searchText: string;

  constructor(private courseSvc: CourseService) {
    this.searchText = "";
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  searchCourses() {
    if (!this.searchText) {
      this.filtered = this.courses;
      return;
    }

    this.filtered = this.courses.filter((x: any) => {
      return x.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
        || x.description.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    }) as [];
  }

  private loadCourses() {
    this.courseSvc.getCourses()
      .subscribe((data) => {
        this.courses = this.filtered = data as [];
      });
  }
}
