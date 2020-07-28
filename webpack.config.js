const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    devtool: 'eval',
    devServer: {
        port: 9000
    },
    plugins: [
new htmlWebpackPlugin({
    title: "Webpack App",
    template: "index.html"
})
    ]
}
