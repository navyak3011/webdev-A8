import {Injectable} from '@angular/core';


@Injectable()
export class CourseServiceClient {

  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001825253/courses/${courseId}`)
      .then(response => response.json())

  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001825253/courses')
      .then(response => response.json())
}

