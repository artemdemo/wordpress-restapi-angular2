# Wordpress reastapi Angular (>2)

I'm rewriting this app ground up.
If you interested you can see the previous solution in the branch [v.1.0](https://github.com/artemdemo/wordpress-restapi-angular2/tree/v.1.0)

## Installation dev environment

I'm using [dockie/lamp](http://github.com/robloach/dockie)

1. Get last image
    ```
    $ docker pull dockie/lamp
    ```

2. Install container
    ```
    $ docker run -d -p 8000:80 -p 2200:22 -p 3306:3306 -v $(pwd)/www:/var/www/html:rw dockie/lamp
    ```
    
    Site will be available at http://localhost:8000/

3. Adding `wordpress` bd - http://localhost:8000/phpmyadmin

4. Copy last [wordpress CMS](https://wordpress.org/download/) to `www` folder

5. Build js and css
    ```
    $ npm run build
    ```

**Backend stack**

* [Dockie](../dockie)
* [Apache](https://httpd.apache.org/) 2.4.7
* [PHP](http://php.net/) 5.5.9
* [MySQL](http://www.mysql.com/) 5.5.37
* [phpMyAdmin](http://www.phpmyadmin.net/) 4.0.10
* [Composer](http://getcomposer.org) 1.0.0-alpha8
  
**MySQL**

Connect on `localhost:3306`, user `root`, password `root`.

### Useful links

https://github.com/preboot/angular-webpack
