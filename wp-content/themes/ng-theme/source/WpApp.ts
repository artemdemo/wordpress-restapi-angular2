import {Component, View} from 'angular2/core';

import {PostsList} from './components/PostsList';


@Component({
    selector: 'wp-app'
})
@View({
    directives: [PostsList],
    template: `
        <div class="row">
            <div class="col-sm-8">
                <posts-list></posts-list>
            </div>
            <div class="col-sm-4">
                <sidebar></sidebar>
            </div>
        </div>
    `
})
export class WpApp {
    constructor() {}
}
