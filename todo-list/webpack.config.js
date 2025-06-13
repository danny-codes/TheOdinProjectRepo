const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    module: {
    rules: [
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        },
        {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: "asset/resource",
        generator: {
            filename: "fonts/[name][ext]",
        },
        },
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
    }),
    ],
};