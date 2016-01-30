import {Component, View, Inject} from 'angular2/core';
import {PostsService, IPost} from '../services/PostsService';
import {PostListItem} from './PostListItem';

@Component({
    selector: 'posts-list'
})
@View({
    directives: [PostListItem],
    template: `
        <div class="posts-list">
            <post-list-item *ngFor="#post of posts" [post-item]="post"></post-list-item>
        </div>
    `
})
export class PostsList {
    posts: IPost[];

    private postsSubscription;

    constructor(@Inject(PostsService) PostsService) {
        this.postsSubscription = PostsService.posts.subscribe(newPosts => {
            this.posts = newPosts
        });
    }

    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }
}
