import {Component, View, Inject} from 'angular2/core';
import {CategoriesService, ICategory} from '../services/CategoriesService';

@Component({
    selector: 'main-menu'
})
@View({
    template: `
        <div class="main-menu">
            <div class="container">
                <div class="main-menu-list clearfix">
                    <div class="main-menu-list-item">
                        <span class="main-menu-list-item__link main-menu-list-item__link_selected">General</span>
                    </div>
                    <div class="main-menu-list-item">
                        <a href="#" class="main-menu-list-item__link">Angular 2</a>
                    </div>
                    <div class="main-menu-list-item">
                        <a href="#" class="main-menu-list-item__link">PHP</a>
                    </div>
                    <div class="main-menu-list-item">
                        <a href="#" class="main-menu-list-item__link">Backbone</a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class MainMenu {
    categories: ICategory[];

    private categoriesSubscription;

    constructor(@Inject(CategoriesService) CategoriesService) {
        this.categoriesSubscription = CategoriesService.categories.subscribe(newCategories => {
            this.categories = newCategories
        });
    }

    ngOnDestroy() {
        this.categoriesSubscription.unsubscribe();
    }
}
