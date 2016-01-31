import {Component, View, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
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
export class CategoryPosts {
    posts: IPost[];

    private postsSubscription;

    constructor(@Inject(PostsService) private PostsService,
                @Inject(RouteParams) private RouteParams) {
    }

    ngOnInit() {
        this.postsSubscription = this.PostsService.getPostsByCategoryID(parseInt(this.RouteParams.get('categoryID')))
            .subscribe(newPosts => {
                this.posts = newPosts
            });
        this.PostsService.updatePosts();
    }

    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }
}
