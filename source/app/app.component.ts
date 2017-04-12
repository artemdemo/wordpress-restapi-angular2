import { Component } from '@angular/core';

@Component({
    selector: 'wp-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['']">Home</a>
                <a [routerLink]="['about']">About</a>
            </nav>
        </header>
        <main>
            <h1>Hello!</h1>

            <router-outlet></router-outlet>
        </main>
    `,
})
export class AppComponent {
    constructor() {
    }
}
