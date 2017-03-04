var config = {
    entry: './app/src/main.js',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        filename: 'app/src/index.js'
    },

    devServer: {
        inline: true,
        port: 8888
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