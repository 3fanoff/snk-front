const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = require("./pages");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    console.log(argv.mode);

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/main.js',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            environment: {
                arrowFunction: false,
                destructuring: false,
                forOf: false,
                const: false,
            },
        },
        devtool: isProduction ? false : 'source-map',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/,
        },
        module: {
            rules: [
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                    options: {
                        // Путь к папке с партиалами
                        partialDirs: [
                            path.resolve(__dirname, 'src/pages/chunks'),
                        ],
                        // Разрешаем использовать require в шаблонах
                        helperDirs: [
                            path.resolve(__dirname, 'src/js/helpers'),
                        ],
                        // Предотвращаем кэширование в dev режиме
                        preventIndent: true,
                        inlineRequires: /\/(img|content)\//,
                    },
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                    options: {
                        sources: {
                            list: [
                                {
                                    tag: "img",
                                    attribute: "src",
                                    type: "src",
                                },
                                {
                                    tag: "source",
                                    attribute: "srcset",
                                    type: "src",
                                }
                            ],
                        },
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[hash:10][ext][query]'
                    }
                },
                {
                    test: /\.js$/,
                    //exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    //'@babel/preset-typescript'
                                ],
                                /*plugins: [
                                    ['@babel/plugin-transform-runtime']
                                ]*/
                            }
                        }
                    ]
                },
                {
                    test: /\.(scss)$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    quietDeps: true,
                                    silenceDeprecations: [
                                        'mixed-decls',
                                        'color-functions',
                                        'global-builtin',
                                        'import'
                                    ]
                                }
                            }
                        }
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1, // количество лоадеров перед css-loader
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.css'],
            fallback: {},
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        optimization: {
            minimize: true,
            chunkIds: 'natural',
            splitChunks: {
                chunks: 'all',
                minSize: 500,
            },
        },
        plugins: pages.map((page) => {
            return new HtmlWebpackPlugin({
                title: page.title,
                template: page.template,
                filename: page.name + '.html',
                inject: 'body',
                templateParameters: {
                    title: page.title,
                    menutitle: page.menu,
                    slider: page.slider,
                    breadcrumblist: page.breadcrumbs
                },
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                },
            })
        }),
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: false,
            port: 2605,
            hot: false,
            liveReload: false,
            watchFiles: ['src/**/*'],
            devMiddleware: {
                writeToDisk: true,
            },
            webSocketServer: "ws",
        },
    }

};