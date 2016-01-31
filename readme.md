# Building web app with Wordpress on the backend and Angular 2 on the front

Yeah, I know, it's (probably) unusual stuff, but why not, since we're going to use REST API :wink:

## What I'm using

* SQlite3 (use whatever database you want, I just like when my repositories contain all building blocks)
* Wordpress 4.4.1
* Angular 2 (beta)
* Bootstrap, with custom color scheme

![alt tag](https://github.com/artemdemo/wordpress-restapi-angular2/blob/master/wp-content/themes/ng-theme/screenshot.png)

## Wordpress configuration

* SQLite Integration https://wordpress.org/plugins/sqlite-integration/
* REST API https://wordpress.org/plugins/rest-api/

### SQLite plugin

* [Download](https://wordpress.org/plugins/sqlite-integration/) "SQLite Integration" plugin
* Copy the `db.php` file found in the sqlite-integratin plugin folder to `wordpress/wp-content` folder
* By default sqlite-integratin plugin will create folder `wp-content/database` and will put db there
  You can override it, by I don't see any reason why. It's fine as it is.
  
More examples you can find [here](http://dogwood.skr.jp/wordpress/sqlite-integration/)

### WP REST API

Documentation: http://v2.wp-api.org/

## Admin password

* user: admin
* pass: 123

## Go

1. Setup the whole thing
  ```
  $ npm run setup
  ```

2. Development
  ```
  $ npm run build && npm run watch
  ```
  
3. Minify code
  ```
  $ npm run compress
  ```
