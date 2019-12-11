const path = require("path")

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    devServer: {
        overlay: true
    }
};