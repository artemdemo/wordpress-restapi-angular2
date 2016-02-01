import {Component, View, Inject} from 'angular2/core';


@Component({
    selector: 'posts-list'
})
@View({
    template: `
        <div class="posts-list">
            Posts List
        </div>
    `
})
export class PostsList {
    constructor() {}
}
