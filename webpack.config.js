const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [];
if (!devMode) {
  // включить только в production
  plugins.push(new MiniCssExtractPlugin());
};

plugins.push(
    new HtmlWebpackPlugin({
        inject: true,
        filename: 'index',
        template: path.join(__dirname, 'index.html'),
        chunks: ['index'],
 
    }),
    new HtmlWebpackPlugin({
        filename: 'orderPage',
        template: path.join(__dirname, 'orderPage.html'),
    }),
    new HtmlWebpackPlugin({
        filename: 'description',
        template: path.join(__dirname, 'descrProduct.html'),
    }),
)

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    plugins,
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
              },
            {
                test: /\.(png|svg|jpg)$/,
                use: ['file-loader'],
            },
            // {
            //     test: /\.html$/,
            //     // exclude: [/node_modules/, require.resolve('./index.html')],
            //     loader: 'html-loader',
            //     options: {
            //         interpolate: true,
            //     }
            // },
        ]
    },
    // rules: [{ test: /\.txt$/, use: 'raw-loader' }],
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? false : 'eval-source-map' //определяет, будут ли и как создаваться исходные карты in DIST folder

    return conf
};