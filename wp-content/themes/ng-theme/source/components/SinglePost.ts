import {Component, View, Inject, Input} from 'angular2/core';
import {PostsService, IPost} from '../services/PostsService';
import {MediaService, IMedia} from '../services/MediaService';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'single-post',
    providers: [MediaService]
})
@View({
    template: `
        <h1>{{ post?.title?.rendered }}</h1>
        <em class="post-item__date text-muted">{{ post?.date }}</em>
        <div class="post-content">
            <div class="thumbnail
                        post-content__thumbnail"
                 [ngClass]="{'post-content__thumbnail_show': media}"
                 *ngIf="post?.featured_media > 0">
                <img *ngIf="media" src="{{ media.media_details.sizes.medium.source_url }}">
            </div>
            <div class="post-content__text"
                 [innerHTML]="post?.content?.rendered"></div>
        </div>
    `
})
export class SinglePost {

    post: IPost;
    media: IMedia;
    private mediaSubscription;
    private postSubscription;

    constructor(@Inject(RouteParams) private RouteParams,
                @Inject(PostsService) private PostsService,
                @Inject(MediaService) private MediaService) {
        this.mediaSubscription = this.MediaService.media.subscribe(newMedia => {
            this.media = newMedia
        });
    }

    ngOnInit() {
        this.postSubscription = this.PostsService.getPost(this.RouteParams.get('postID'))
            .subscribe((newPost) => {
                this.post = newPost;
                if (newPost.featured_media > 0) {
                    this.MediaService.getMedia(this.post.featured_media);
                }
            });
        this.PostsService.updatePosts();
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
        this.mediaSubscription.unsubscribe();
    }
}
