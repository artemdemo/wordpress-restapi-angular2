import {Component, View} from 'angular2/core';

import {PostsList} from './components/PostsList';
import {MainMenu} from './components/MainMenu';


@Component({
    selector: 'wp-app'
})
@View({
    directives: [PostsList, MainMenu],
    template: `
    <main-menu></main-menu>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <posts-list></posts-list>
            </div>
        </div>
    </div>
    `
})
export class WpApp {
    constructor() {}
}
