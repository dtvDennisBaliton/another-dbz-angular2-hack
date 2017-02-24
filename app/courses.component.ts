
/** Each file is considered a module */

import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template:   `
                <h2> Courses </h2>
                {{title}}
                <input type="text" autoGrow/>
                <ul>
                    <li *ngFor="#course of courses">
                        {{course}}
                    </li>
                </ul>
                ` ,     
    providers: [CourseService],
    directives: [AutoGrowDirective]     
})

export class CoursesComponent {

    title: string = "The title of courses page";
    /** Same as ==> title  = "The title of courses page" */
    //courses = ["course1","course2","course3","course4","notreally"];
    courses;
    /** get data from a server using a service!!!! */
    
    constructor(courseService: CourseService) {
        /** Dependency Injection example  */
        this.courses = courseService.getCourses();
    }
}