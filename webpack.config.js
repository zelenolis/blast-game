import { resolve } from 'path';

const __dirname = import.meta.dirname;

export default {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                      targets: "defaults",
                      presets: ['@babel/preset-env']
                  }
                },
              }
        ]
    }
}