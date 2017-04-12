import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-view',
    styles: [require('./home.view.less')],
    template: `
        <p>
            Home Works!
        </p>
    `,
})
export class HomeView implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
