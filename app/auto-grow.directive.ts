import {Directive, ElementRef, Renderer} from 'angular2/core'


/** This is just another class with the @Directive annotation */
@Directive({
    selector: '[autoGrow]' /** if angular finds this in the CSS selector */ ,
    host: {
        /** this binds onFocus()(method) to (focus) event */
        '(focus)' : 'onFocus()',
        /** this is going to be a method in the DIRECTIVE class */
        '(blur)' : 'onBlur()'
    }
})

export class AutoGrowDirective {


    /** Dependency Injection */
    constructor(private el: ElementRef, private renderer: Renderer) {

    }

    onfocus() {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }


    onblur() {
        this.renderer.setElementStyle(this.el, 'width', '120');
    }

}