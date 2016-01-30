import {Component, View, Inject, Input} from 'angular2/core';
import {IPost} from '../services/PostsService';
import {MediaService, IMedia} from '../services/MediaService';

@Component({
    selector: 'post-list-item',
    providers: [MediaService]
})
@View({
    template: `
        <h2>{{ postItem.title.rendered }}</h2>
        <em class="post-item__date text-muted">{{ postItem.date }}</em>
        <div class="post-item-excerpt">
            <div class="thumbnail
                        post-item-excerpt__thumbnail"
                 *ngIf="media">
                <img src="{{ media.media_details.sizes.thumbnail.source_url }}">
            </div>
            <div class="post-item-excerpt__text"
                 [innerHTML]="postItem.excerpt.rendered"></div>
        </div>
    `
})
export class PostListItem {
    @Input('post-item') postItem: IPost;

    media: IMedia;
    private mediaSubscription;

    constructor(@Inject(MediaService) private MediaService) {
        this.mediaSubscription = MediaService.media.subscribe(newMedia => {
            this.media = newMedia
        });
    }

    ngOnInit() {
        if (this.postItem.featured_media > 0) {
            this.MediaService.getMedia(this.postItem.featured_media);
        }
    }

    ngOnDestroy() {
        this.mediaSubscription.unsubscribe();
    }
}
