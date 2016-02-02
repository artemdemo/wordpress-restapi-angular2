import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostsList} from './components/PostsList';
import {SinglePost} from './components/SinglePost';

@Component({
    selector: 'wp-app'
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    `
})
@RouteConfig([
    { path: '/posts', component: PostsList, as: 'PostsPage', useAsDefault: true },
    { path: '/posts/:postID', component: SinglePost, name: 'SinglePost' },
    { path: '/**', redirectTo: ['PostsPage'] }
])
export class WpApp {
    constructor() {}
}
