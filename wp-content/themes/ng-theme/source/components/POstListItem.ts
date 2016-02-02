import {Component, View, Inject, Input} from 'angular2/core';
import {IPost} from '../services/PostsService';

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'post-list-item',
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h2><a [routerLink]="['SinglePost', {postID : postItem.id}]">{{ postItem.title.rendered }}</a></h2>
        <em class="post-item__date text-muted">{{ postItem.date }}</em>
        <div class="post-item-excerpt clearfix">
        
            <div class="post-item-excerpt__text"
                 [innerHTML]="postItem.excerpt.rendered"></div>
        </div>
    `
})
export class PostListItem {
    @Input('post-item') postItem: IPost;

    constructor() {}
}
