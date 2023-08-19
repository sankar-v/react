Setting up React, Babel, Webpack, & TypeScript Without Create-React-App


## Node Version Manager (NVM) installation
A node version manager helps in easy tracking and management of different versions of node

Follow the instructions at https://monovm.com/blog/install-nvm-on-ubuntu/ for installing NVM on Ubuntu

## Node installation

Once NVM is installed, install node as follows.

nvm install node

## Setting up package.json 

Package.json describes all the libraries required for running the application. Initialize the package.json by typing the following.

npm init -y

Alternatively you could use the package.json provided in the project and install the libraries by typing the following command.

npm update --save or npm update --save-dev

## Installing the libraries 

If the last library rule-loader does not install, remove it and install others

npm install —save-dev —save-exact react react-dom @babel/core @babel/preset-env @babel/preset-react babel-loader  web pack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader rule-loader

## Create .babelrc file
The file has been created for you. it will look like this.

{
"presets": [
"@babel/preset-env",
"@babel/preset-react"
]
}

## Create webpack.config.js

At the project root create webpack.config.js file. 

The contents of the file looks like this..
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.jsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

For transpiling .jsx files into JavaScript files, babel-loader is used. 
For handling the html files, HtmlWebpackPlugin is used.

## Create App.jsx

Create a folder named src and inside that create App.jsx.  This file contains the React appthat will be bootstrapped in the root. This represents the component file in React.

A sample file has been provided.

## Create index.html and index.js files

In the src folder, create 2 files index.html and indes.js. 2 sample files have been provided. 

Index.jsx - bootstraps the React component
index.html - injects the React in the root div

## Creating the start up and build scripts

In the package.json file include the following in the scripts section.

"start": "webpack serve --open",
"build": "webpack --config webpack.config.js --mode production"

## References:

https://medium.com/@abuduabiodunsulaiman/setup-react-app-with-webpack-ts-and-js-da80cf3b7278
