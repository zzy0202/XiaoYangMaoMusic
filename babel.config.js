module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset',
		["es2015", { "modules": false }],
	],
	"plugins": [
		[
			"component",
			{
				"libraryName": "element-ui",
				"styleLibraryName": "theme-chalk"
			}
		]
	]
}
