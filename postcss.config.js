// Wen in production mode, purge 
// if (process.env.NODE_ENV === 'production') {
    
    module.exports = {
        plugins: [
            require('@fullhuman/postcss-purgecss')({
                content: ['./**/*.php']
            }),
            require('autoprefixer'),
            require('cssnano')
        ]
    }

// }

// else {

//     module.exports = {
//         plugins: [
//             // require('@fullhuman/postcss-purgecss')({
//             //     content: ['./**/*.php']
//             // }),
//             // require('autoprefixer'),
//             // require('cssnano')
//         ]
//     };

// }