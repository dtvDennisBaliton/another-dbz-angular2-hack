

/** Each file is considered a module */

import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template:   `
                <h2> Authors </h2>
                {{title}}
                <ul>
                    <li *ngFor="#author of authors">
                        {{author}}
                    </li>
                </ul>
                ` ,     
    providers: [AuthorService]     
})


export class AuthorsComponent {

    title: string = "The name of the authors";

    authors: string[];

    /** get data from a server using a service!!!! */  
    constructor(authorService: AuthorService) {
        /** Dependency Injection example  */
        this.authors = authorService.getAuthors();
    }
}