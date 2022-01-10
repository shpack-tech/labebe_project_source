const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);

const jsLoaders = () => {
	const loaders = [
		{
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	];

	return loaders;
};

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: ['@babel/polyfill', './index.js'],
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	devtool: isDev ? 'source-map' : false,
	devServer: {
		port: 3000,
		hot: isDev,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: '404.html',
			template: '404.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'mainpage.html',
			template: 'mainpage.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'subcatalog.html',
			template: 'subcatalog.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'reviews-and-questions.html',
			template: 'reviews-and-questions.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'profile.html',
			template: 'profile.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'product.html',
			template: 'product.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'order.html',
			template: 'order.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'gifts-cards.html',
			template: 'gifts-cards.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'contacts.html',
			template: 'contacts.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'catalog.html',
			template: 'catalog.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'cart.html',
			template: 'cart.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'blog.html',
			template: 'blog.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'blog-post.html',
			template: 'blog-post.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'wishlist.html',
			template: 'wishlist.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'compare.html',
			template: 'compare.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'orders.html',
			template: 'orders.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'brand.html',
			template: 'brand.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new HTMLWebpackPlugin({
			filename: 'search-results.html',
			template: 'search-results.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'src/favicon.ico'),
				to: path.resolve(__dirname, 'dist'),
			},
		]),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'src/images'),
				to: path.resolve(__dirname, 'dist/images'),
			},
		]),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'src/products.json'),
				to: path.resolve(__dirname, 'dist/products.json'),
			},
		]),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'src/english.json'),
				to: path.resolve(__dirname, 'dist/english.json'),
			},
		]),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'src/russian.json'),
				to: path.resolve(__dirname, 'dist/russian.json'),
			},
		]),
		new MiniCssExtractPlugin({
			filename: `${filename('css')}`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(sass|css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
							reloadAll: true,
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: jsLoaders(),
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/font-woff',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/octet-stream',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'image/svg+xml',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
	},
};
