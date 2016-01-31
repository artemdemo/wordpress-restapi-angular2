import {Injectable} from 'angular2/core';

@Injectable()
export class UrlService {

    private baseUrl: string = 'http://localhost/wp-angular2/wp-json/wp/v2';

    constructor() {}

    public buildUrl = (url: string) => this.baseUrl + url;
}
