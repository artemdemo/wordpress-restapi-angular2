import {Component, View, Inject} from 'angular2/core';
import {PostsService, IPost} from '../services/PostsService';

@Component({
    selector: 'single-post'
})
@View({
    template: `
        <h1>Single Post<h1>
    `
})
export class SinglePost {

}
