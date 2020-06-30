<h1 align="center">SEO Optimized Skeleton</h1>

Webpack based starter template for building SEO/speed optimized funnels. 

## Requirements
- [PHP](https://php.net) (>= version 7.3.9)
- [Node.js](https://nodejs.org/en/) (>= 10.16.3)
- [npm](https://www.npmjs.com/get-npm) (>= version 6.9) 

## Installation

```sh
# clone the repo
$ git clone git@gitlab.com:scito/seo-funnels/seo-optimized-skeleton.git myproject

# go into app's directory
$ cd myproject

# remove git repo from the folder
$ rm -rf .git

# install javascript dependencies
$ npm install

# install php dependencies
$ composer install
```

Following npm commands can be used to build the project

```sh
# build for development and watch for changes
$ npm run watch

# build for development 
$ npm run dev

# build for production 
$ npm run build

```

Run the project on a webserver

```sh
# go to the web directory of the app
$ cd dist

# e.g. running the project on a local PHP built-in web server 
$ php -S localhost:8000

```

*You should now see a welcome page when visiting http://localhost:8000*

## Usage


***File placement***

- HTML files must be placed under the src/views directory
- Style related files (css/scss) must be placed under the src/styles directory
- All media related files must be placed under the src/media directory
- Javascript related files must be placed under the src/styles directory

<br>

***(Optional) How to install Bootstrap 4 and jQuery***

Install bootstrap
````sh
npm install bootstrap --save
````

Install bootstrap dependencies.
````sh
npm install popper.js --save
npm install jquery --save
````

Add following line to the `src/styles/sass/index.scss` file 

````scss
@import "~bootstrap/scss/bootstrap";
````

Add following line to the `src/javascripts/index.js` file
````js
require('./styles/index.scss');

import PopperJs from 'popper.js';

import jquery from 'jquery'; 
// or globalize jquery with 
// window.$ = window.jQuery = require('jquery');


jquery(()=>{
    console.log('Hello jQuery + bootstrap!');
});
````
<br>

***(Optional) How to add custom google fonts***

e.g. Adding the Lato and Open Sans font.<br />
Add following line to the `src/styles/sass/index.scss` file (don't forget to append `&display=swap`)

````scss
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,700&display=swap');
````

Add following line to the `src/javascripts/index.js` file to load the scss file with the custom font
````js
require('./styles/index.scss');
````

<br>

***(Optional) How to generate and maintain a webpage (html/php file)***

For example, place an `about.php` file in the `src/views` directory containing following template

````html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><%= htmlWebpackPlugin.options.title %></title> 
    </head>
    <body>
    </body>
</html>
````

Add following code in the `webpack.config.js` file to the `plugins` Array

````js
new HtmlWebpackPlugin({
    title: 'About', // Page title
    filename: 'about/index.php', // Where to place
    template: 'src/views/about.php', // Where to find the file
    favicon: 'src/media/favicon.ico', // Add a favicon.ico
    meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#fff', 
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' // Page description
    }
})
````

*Now rebuild the project, in the dist directory of the project a new file named `about/index.php` will be created, it can be accessed via http://localhost:8000/about*

<br>

***(Optional) How to get user country/ip info***

Include the `helpers/country_info.php` file at the top of the page where you need it, for example on top of the `src/views/index.php`<br />
You can now access user country specific info, see https://maxmind.github.io/GeoIP2-php 

````html
<?php
    include('helpers/country_info.php')
?>

<!DOCTYPE html>
<html lang="en">
    <head>
    </head>
    <body>
        <?php
            echo $country->isoCode;
        ?>
    </body>
</html>
````

<br />

***Media***

All media files need to be placed in the `src/media` directory.<br />
After a build, they can be accessed, e.g. in the `src/views/about.php` file.

````html
<!-- html/php -->
<img src="/assets/my_asset.jpg" />
````

````scss
// css/scss
.img-class {
    background-image: url(/asset/my_asset.jpg);
}
````

<br />

***(S)CSS***

(s)css files will be purged, meaning that tags that are not visible and have a reference in a css file will NOT be used.<br />
If you have css tags that you don't want to be purged, add following comment in CSS for whitelisting CSS

````scss
/*! purgecss start ignore */
h1 {
  color: blue;
}

h3 {
  color: green;
}
/*! purgecss end ignore */
````

## Production deployment (for server Admins) 
- Make sure to set the Web Directory to the `/dist` directory.<br />
- Following deploy script should be used (forge). Replace `website.com` with appropriate field 

````
cd /home/forge/website.com
git pull origin master
composer install
npm install
npm run build
echo "" | sudo -S service php7.3-fpm reload
npx sitemap-generator-cli -f dist/sitemap.xml https://website.com
````

- enable gzip via nginx