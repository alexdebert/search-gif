/**
 * @overview Webpack 2 configuration.
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const OUTPUT_PATH = 'dist';

const config = {
	entry: './src/app.js',

	output: {
		path: path.resolve(__dirname, OUTPUT_PATH),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: [
								'transform-class-properties',
								'transform-object-rest-spread'
							]
						}
					}
				]
			},
			{
				test: /app\.scss$/,
				use: [
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					},{
						loader: 'sass-loader'
					}
				]
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src')
		},

		extensions: [
			'.js', '.jsx'
		]
	},

	// Webpack plugins:
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;