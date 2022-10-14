const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: '/src/index.js',

    module: {
        rules: [
            // LOADERS
            {
                test: /\.html/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize:true,}
                    },
                ]
            }, 
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html'}),

    ]
}

