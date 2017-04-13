/// <reference path="../node_modules/@types/node/index.d.ts" />

// polyfills
import 'ts-helpers';
import 'reflect-metadata';
import 'core-js/client/shim';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './app/app.module';

declare const ENV: {
    production: boolean;
};

if (ENV.production) {
    enableProdMode();
} else {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

function deployApp() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState !== 'loading') {
    deployApp();
} else {
    document.addEventListener('DOMContentLoaded', deployApp);
}
