import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IRendered} from './PostsService';
import {UrlService} from './UrlService';

export interface IMediaDetailsSize {
    width: number;
    height: number;
    file: string;
    mime_type: string;
    source_url: string;
}

export interface IMediaDetailsSizeList {
    thumbnail: IMediaDetailsSize;
    medium: IMediaDetailsSize;
    full: IMediaDetailsSize;
}

export interface IMediaDetails {
    width: number;
    height: number;
    sizes: IMediaDetailsSizeList;
}

export interface IMedia {
    id: number;
    guid: IRendered;
    media_details: IMediaDetails;
}

export interface IMediaMap {
    [key: string]: IMedia;
}

@Injectable()
export class MediaService {

    public media: Observable<IMedia>;
    private _mediaObserver: any;

    static mediaMap: IMediaMap = {};

    constructor(@Inject(Http) private Http, @Inject(UrlService) private UrlService) {
        this.media = new Observable(observer =>
            this._mediaObserver = observer);
    }

    getMedia(mediaID: number) {
        if (MediaService.mediaMap.hasOwnProperty(String(mediaID))) {
            this._mediaObserver.next(MediaService.mediaMap[String(mediaID)]);
        } else {
            this.fetchMedia(mediaID);
        }
    }

    fetchMedia(mediaID: number) {
        let url = `/wp-json/wp/v2/media/${String(mediaID)}`;
        return this.Http.get(this.UrlService.buildUrl(url))
        .subscribe((res) => {
            let newMedia = res.json();
            MediaService.mediaMap[String(mediaID)] = newMedia;
            this._mediaObserver.next(newMedia);
        })
    }
}
