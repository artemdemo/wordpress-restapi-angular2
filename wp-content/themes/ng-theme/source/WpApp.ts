import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostsList} from './components/PostsList';
import {MainMenu} from './components/MainMenu';
import {SinglePost} from './components/SinglePost';


@Component({
    selector: 'wp-app'
})
@View({
    directives: [MainMenu, ROUTER_DIRECTIVES],
    template: `
    <main-menu></main-menu>
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
    { path: '/posts/:postID/', component: SinglePost, name: 'SinglePost' },
    { path: '/**', redirectTo: ['PostsPage'] }
])
export class WpApp {
    constructor() {}
}
