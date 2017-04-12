/// <reference path="../node_modules/@types/requirejs/index.d.ts" />

//import { enableProdMode } from '@angular/core';
import 'ts-helpers';
import 'reflect-metadata';
import 'core-js/client/shim';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './app/app.module';

// depending on the env mode, enable prod mode or add debugging modules
// if (ENV.production === 'production') {
//     enableProdMode();
// }

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

main();

// if (document.readyState === 'complete') {
//     main();
// } else {
//     document.addEventListener('DOMContentLoaded', main);
// }
