// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const isDevelopment = process.env.NODE_ENV == 'development';


const stylesHandler = 'style-loader';



const config = {
    // entry: './src/index.js',
    entry: {
        bundle:  path.resolve(__dirname, './src/index.js'),
      },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
            directory: path.join(__dirname, 'src')
        },
        port: 3000,
        open: true,
        host: 'localhost',
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isDevelopment) {
        config.mode = 'development';
        
        
    } else {
        config.mode = 'production';
    }
    return config;
};
