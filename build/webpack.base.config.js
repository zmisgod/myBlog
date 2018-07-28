const path = require('path')
const webpack = require('webpack')
const vueLoaderConfig = require('./vue-loader.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    devtool: '#source-map',
    entry: {
        app: './src/entry-client.js',
        vendor: [
            'es6-promise/auto',
            'vue',
            'vue-router',
            'vuex',
            'vuex-router-sync',
            'vue-material'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    },
    module: {
        noParse: /es6-promise\.js$/,
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // enable CSS Modules
                            modules: true,
                            // customize generated class names
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "vue-style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader" // compiles Sass to CSS 
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.styl(us)?$/,
                use: isProd ?
                    ExtractTextPlugin.extract({
                        use: [{
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            },
                            'stylus-loader'
                        ],
                        fallback: 'vue-style-loader'
                    }) : ['vue-style-loader', 'css-loader', 'stylus-loader']
            },
        ]
    },
    plugins: isProd ? [
        new VueLoaderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
            filename: 'common.[chunkhash].css'
        })
    ] : [new VueLoaderPlugin(), new FriendlyErrorsPlugin()],
}