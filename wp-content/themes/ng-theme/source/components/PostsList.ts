import {Component, View, Inject} from 'angular2/core';

import {PostsService, IPost} from '../services/PostsService';


@Component({
    selector: 'posts-list'
})
@View({
    template: `
        <div class="posts-list">
            <post-list-item></post-list-item>
        </div>
    `
})
export class PostsList {
    posts: IPost[];

    private postsSubscription;

    constructor(@Inject(PostsService) private PostsService) {
        this.postsSubscription = PostsService.posts.subscribe(newPosts => {
            this.posts = newPosts
        })
    }

    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }
}
