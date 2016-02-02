import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {UrlService} from './UrlService';

export interface IRendered {
    rendered: string;
}

export interface IPost {
    id: number;
    date: string;
    link: string;
    title: IRendered;
    content: IRendered;
    excerpt: IRendered;
    categories: number[];
    featured_media: number;
}

@Injectable()
export class PostsService {

    public posts: Observable<IPost[]>;
    private _postsObserver: any;
    private _posts: IPost[];

    constructor(@Inject(Http) private Http, @Inject(UrlService) private UrlService) {
        this.posts = new Observable(observer =>
            this._postsObserver = observer);

        Http.get(UrlService.buildUrl('/posts'))
            .subscribe((res) => {
                this._posts = res.json();
                this.updatePosts()
            })
    }

    getPost(postID: number) {
        return new Observable(observer => {
            let getPostSubscription = this.posts.subscribe((newPosts: IPost[]) => {
                if (newPosts && newPosts.hasOwnProperty('length')) {
                    newPosts.forEach((post: IPost) => {
                        if (post.id == postID) {
                            observer.next(post);
                            getPostSubscription.unsubscribe();
                        }
                    })
                }
            })
        })
    }

    updatePosts() {
        this._postsObserver.next(this._posts);
    }
}
