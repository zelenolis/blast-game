import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = import.meta.dirname;

export default {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(mp3|wav)$/,
                use: 'file-loader',
            }
        ]
    },
    devServer: {
        static: {
            directory: resolve(__dirname, 'dist'),
            publicPath: '/assets'
        },
        compress: true,
        port: 9000,
    },
}