var path = require('path')
var webpack = require('webpack')
var prod = (process.env.NODE_ENV === 'production')

var plugins = [
	new webpack.DefinePlugin({
		'__DEV__': process.env.NODE_ENV === 'development'
	})
]
if (prod) {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false },
		sourceMap: true
	}))
}	

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		filename: prod ? 'vue-runkit.min.js' : 'vue-runkit.js',
		path: path.join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'vuerunkit'
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
		extensions: ['.js', '.vue']
	},
	devtool: 'source-map',
	plugins: plugins
}