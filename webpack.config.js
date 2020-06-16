const path = require('path'); // Webpack uses this to work with directories
const HtmlWebpackPlugin = require('html-webpack-plugin') // Create HTML files
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copy folders
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extract CSS from JS file
//const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin"); // Extract critical/above fold CSS and place inline


// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {



    // Path to your entry point. From this file Webpack will begin his work
    entry: [
        './src/javascript/index.js'
    ],



    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        //publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },



    //
    module: {

        // loaders
        rules: [

            {

                // Apply rule for js files
                test: /\.js$/,
                exclude: /(node_modules)/,

                // Convert es6 code to es5 for IE browser compatibility
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }


            }, {

                // Look for images and pass them through the url-loader
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // when image smaller then 8kb, convert to base64 string
                        name: 'media/[hash]-[name].[ext]', // what name to give to images
                        publicPath: 'assets',
                    }
                }]


            }, {

                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,



                // Set loaders to transform files. Loaders are applying from right to left(!)
                use: [{
                    // loader: MiniCssExtractPlugin.loader // extract css from js file
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader' // reads the css
                }, {
                    loader: 'postcss-loader' // css manipulation like autoprefixer and minifying
                }, {
                    loader: 'sass-loader', // converts sass (.scss) into css
                    options: {
                        implementation: require('sass') // we'll use dart sass, this must be installated manually (brew install sass/sass/sass)
                    }
                }]
            }
        ]
    },

    plugins: [


        // copy some folders
        new CopyWebpackPlugin([{
            from: 'src/media',
            to: 'assets'
        }]),


        new CopyWebpackPlugin([{
            from: 'src/robots.txt',
            to: 'robots.txt'
        }]),

        new CopyWebpackPlugin([{
            from: 'src/media/favicon.ico',
            to: 'favicon.ico'
        }]),

        // country file
        new HtmlWebpackPlugin({
            filename: 'helpers/country_info.php',
            template: 'src/views/helpers/country_info.php',
            inject: false // don't inject any js files
        }),


        // 
        new HtmlWebpackPlugin({
            filename: 'helpers/gtm.php',
            template: 'src/views/helpers/gtm.php',
            inject: false // don't inject any js files
        }),



        // 
        new HtmlWebpackPlugin({
            filename: 'helpers/gtm_no_script.php',
            template: 'src/views/helpers/gtm_no_script.php',
            inject: false // don't inject any js files
        }),


        // 
        new HtmlWebpackPlugin({
            filename: 'partials/footer.php',
            template: 'src/views/partials/footer.php',
            inject: false // don't inject any js files
        }),



        // 404
        new HtmlWebpackPlugin({
            filename: '404/index.php',
            template: 'src/views/404.php'
        }),



        // generate html/php file
        new HtmlWebpackPlugin({
            filename: 'index.php', // where placed in dist map and what name?
            template: 'src/views/index.php',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        }),


        // About Us
        new HtmlWebpackPlugin({
            title: 'Bitcoin Revolution About Us – Our Story',
            filename: 'about/index.php',
            template: 'src/views/about.php',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': '#fff',
                'description': 'Bitcoin Revolution is the brainchild of a talented team of seasoned financial brokers. Together with the best software developers in the field, we created the most accurate cryptocurrency trading app.'
            }
        }),





        // Login
        new HtmlWebpackPlugin({
            filename: 'login/index.php',
            template: 'src/views/login.php',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': '#fff',
                'description': 'Login to your Bitcoin Revolution Account. Already a member? Sign in here and join us!'
            }
        }),




    ]

};