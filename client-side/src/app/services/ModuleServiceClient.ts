import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001825253/courses/${courseId}/modules`)
      .then(response => response.json())
}