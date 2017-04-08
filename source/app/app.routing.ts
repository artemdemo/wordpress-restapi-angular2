
import { RouterModule, Routes } from '@angular/router';

import { HomeView } from '../views/home.view';

const routes: Routes = [
    { path: '', component: HomeView },
];

export const routing = RouterModule.forRoot(routes);
