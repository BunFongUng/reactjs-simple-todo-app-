var config = {
    entry: './main.js',

    output: {
        path: './dist/src/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 3333
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;