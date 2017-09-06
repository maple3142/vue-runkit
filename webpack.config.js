const path = require('path');
module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: 'vue-runkit.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js/,
				exclude: /node_modules/
			},
			{
				loader: 'vue-loader',
				test: /\.vue/
			}
		]
	},
	resolve: {
		extensions: ['.js','.vue']
	}
}