const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: mode,
    target: target,

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "bundle.min.css" },
                    },
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: "css-loader"
                    }, {
                        // Loader for webpack to process CSS with PostCSS
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                        return [
                                            require("precss"),
                                            require("autoprefixer")
                                        ];
                                    }
                                },
                            },
                        }, {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: "sass-loader"
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [new MiniCssExtractPlugin({
        filename: "bundle.css",
        chunkFilename: "index.scss"
    })],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};