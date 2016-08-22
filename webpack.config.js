var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		webpack: ['webpack-dev-server/client?http://localhost:8080','webpack/hot/only-dev-server'],
		app: "./src/app.js"
	},
	output: {
		path: './build',
		filename: "[name].js"
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			loaders: ['react-hot', 'babel'],
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: "style!css"

		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!sass')

		}]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
	plugins: [

		new ExtractTextPlugin('./css/styles.css'),
		new webpack.HotModuleReplacementPlugin(), //热替换插件
		new webpack.NoErrorsPlugin()	//防止报错插件
	]
};