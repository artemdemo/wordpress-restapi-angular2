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

    updatePosts() {
        this._postsObserver.next(this._posts);
    }
}
