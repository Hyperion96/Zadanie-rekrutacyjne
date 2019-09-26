const path = require('path');
const webpack = require('webpack');
const magicImporter = require('node-sass-magic-importer');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');




const boxes = [
	{
		img: "assets/images/boxes/computer.svg",
		title: "Wybierz <strong>ofertę</strong>"
	},
	{

		img: "assets/images/boxes/lista.svg",
		title: "<strong>Wypełnij</strong> zgłoszenie",

	},
	{

		img: "assets/images/boxes/list-pack.svg",
		title: "<strong>Najnowsze </strong> Oferty",

	},

];

const jobs = ["spawacz", "monter", "murarz",
	"monter rurociągów", "operator CNC", "elektryk", "pracownik produkcji", "lakiernik", "operator koparki", "malarz przemysłowy", "cieśla", "stolarz", "zbrojarz", "inne"]
module.exports = {
	mode: 'production',
	entry: './src/index.js',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		//new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './index.ejs',
			filename: __dirname + "/index.html",
			title: "Zadanie",
			templateParameters: {
				"jobs": jobs,
				"boxes": boxes,
			}

		}),
		new MiniCssExtractPlugin({

		})
	],

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(core-js|regenerator-runtime)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [{
					loader: MiniCssExtractPlugin.loader,
				},
					'css-loader',
				{
					loader: 'postcss-loader',
				},
				{
					loader: 'sass-loader',

					options: {
						sassOptions: {
							importer: magicImporter()
						}
					},
				},
				],
			},
		]
	},
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			vendors: {
	// 				priority: -10,
	// 				test: /[\\/]node_modules[\\/]/
	// 			}
	// 		},
	// 		chunks: 'async',
	// 		minChunks: 1,
	// 		minSize: 30000,
	// 		name: true
	// 	}
	// },

	devServer: {
		open: true,
		host: 'localhost',//your ip address
		port: '8080',




	},


};