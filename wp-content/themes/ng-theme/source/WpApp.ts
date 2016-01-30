import {Component, View} from 'angular2/core';

@Component({
    selector: 'todo-app'
})
@View({
    template: `
        <div class="row">
            <div class="col-sm-6">
                <todo-list></todo-list>
            </div>
            <div class="col-sm-6">
                <todo-view></todo-view>
            </div>
        </div>
    `
})
export class WpApp {
    constructor() {}
}
