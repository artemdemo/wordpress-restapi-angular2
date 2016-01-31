import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {WpApp} from './WpApp';
import {PostsService} from './services/PostsService';
import {CategoriesService} from './services/CategoriesService';
import {UrlService} from './services/UrlService';

bootstrap(WpApp, [
    PostsService,
    CategoriesService,
    UrlService,
    HTTP_PROVIDERS
]);
