import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-view',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.less']
})
export class HomeView implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
