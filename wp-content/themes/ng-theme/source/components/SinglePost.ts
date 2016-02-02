import {Component, View, Inject} from 'angular2/core';
import {PostsService, IPost} from '../services/PostsService';

import {RouteParams} from 'angular2/router';

@Component({
    selector: 'single-post'
})
@View({
    template: `
        <h1>{{ post?.title?.rendered }}</h1>
        <em class="post-item__date text-muted">{{ post?.date }}</em>
        <div class="post-content">

            <div class="post-content__text"
                 [innerHTML]="post?.content?.rendered"></div>
        </div>
    `
})
export class SinglePost {

    post: IPost;

    private postSubscription;

    constructor(@Inject(RouteParams) private RouteParams,
                @Inject(PostsService) private PostsService) {}

    ngOnInit() {
        this.postSubscription = this.PostsService.getPost(this.RouteParams.get('postID'))
            .subscribe((newPost) => {
                this.post = newPost;
            });
        this.PostsService.updatePosts();
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
