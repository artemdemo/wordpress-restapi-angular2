import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {UrlService} from './UrlService';


export interface ICategory {
    id: number;
    count: number;
    name: string;
    slug: string;
}

@Injectable()
export class CategoriesService {

    public categories: Observable<ICategory>;
    private _categoriesObserver: any;
    private _categories: ICategory[];

    constructor(@Inject(Http) private Http, @Inject(UrlService) private UrlService) {
        this.categories = new Observable(observer =>
            this._categoriesObserver = observer);

        Http.get(this.UrlService.buildUrl('/categories?context=view'))
            .subscribe((res) => {
                this._categories = res.json();
                this.updateCategories();
            });
    }

    updateCategories() {
        this._categoriesObserver.next(this._categories);
    }

}
