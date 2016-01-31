import {Component, View, Inject} from 'angular2/core';
import {CategoriesService, ICategory} from '../services/CategoriesService';
import {Router, ROUTER_DIRECTIVES, Location} from 'angular2/router';

@Component({
    selector: 'main-menu'
})
@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="main-menu">
            <div class="container">
                <div class="main-menu-list clearfix">
                    <div class="main-menu-list-item" *ngFor="#category of categories">
                        <a [routerLink]="['CategoryPosts', {categoryID : category.id}]"
                           class="main-menu-list-item__link"
                           [ngClass]="{'main-menu-list-item__link_selected': checkIfSelected(category)}">
                           {{ category.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class MainMenu {
    categories: ICategory[] = [];

    private categoriesSubscription;

    constructor(@Inject(CategoriesService) private CategoriesService,
                @Inject(Router) private Router,
                @Inject(Location) private Location) {
        this.categoriesSubscription = CategoriesService.categories.subscribe(newCategories => {
            this.categories = newCategories
        });
    }

    ngOnDestroy() {
        this.categoriesSubscription.unsubscribe();
    }

    checkIfSelected(category: ICategory) {
        let path = this.Location.path();
        let categoryMatch = /^\/categories\/(\d+)$/.exec(path);
        switch (true) {
            case category.id == 0 && path == '/posts':
                return true;
            case categoryMatch && parseInt(categoryMatch[1]) == category.id:
                return true;
            default:
                return false;
        }
    }
}
