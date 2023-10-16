const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/, //this is regex saying that we are looking for anything that ends in .ts
                use: 'ts-loader', //ts-loader is a library that takes our TS and compiles it into JS and puts it into our public folder
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}