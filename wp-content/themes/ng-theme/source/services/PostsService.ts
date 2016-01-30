import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

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
    featured_media: number;
}

@Injectable()
export class PostsService {

    public posts: Observable<IPost>;
    private _postsObserver: any;
    private _posts: IPost[];

    private baseUrl: string = 'http://localhost/wp-angular2';

    constructor(@Inject(Http) private Http) {
        this.posts = new Observable(observer =>
            this._postsObserver = observer);

        Http.get(this.buildUrl('/wp-json/wp/v2/posts?context=view'))
            .subscribe((res) => {
                this._posts = res.json();
                this.updatePosts();
            });
    }

    updatePosts() {
        this._postsObserver.next(this._posts);
    }

    private buildUrl = (url: string) => this.baseUrl + url;

}
