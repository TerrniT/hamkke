module.export = {
	"root": true,
	"env": {
		'es2021': true,
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	"plugins": [
		"@typescript-eslint",
		'react',
		'react-native',
		'react-hooks'
	],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:react-native/recommended",
		"plugin:react-hooks/recommended"
	],
	"rules": {
		"max-lines": [
			"error", {
				"max": 1000,
				"skipComments": false,
				"skipBlankLines": false
			}
		],
		"semi": [2, "never"],
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"lines-between-class-members": [
			"error",
			"always",
			{ "exceptAfterSingleLine": true }
		],
		"no-unused-vars": 0,
		"@typescript-eslint/no-unused-vars": ["error", {
			"argsIgnorePattern": "^_"
		}],
		"max-len": ["error", {
			"code": 100,
			"ignoreUrls": true,
			"tabWidth": 2,
			"ignoreTrailingComments": true,
			"ignoreComments": true
		}],
		"no-trailing-spaces": ["error", {
			"skipBlankLines": false
		}],
		"no-multiple-empty-lines": ["error", {
			"max": 1
		}],
		"no-extra-semi": "error",
		"array-bracket-spacing": ["error", "never"],
		"object-curly-spacing": ["error", "always"],
		"object-curly-newline": ["error", {
			"ObjectExpression": {
				"multiline": true,
				"minProperties": 3,
				"consistent": true
			},
			"ImportDeclaration": "never",
			"ExportDeclaration": "never"
		}],
		"object-property-newline": ["error", {
			"allowMultiplePropertiesPerLine": true
		}],
		"space-before-blocks": "error",
		"no-spaced-func": "error",
		"implicit-arrow-linebreak": "error",
		"quote-props": ["error", "as-needed"],
		"computed-property-spacing": ["error", "never"],
		"comma-spacing": ["error", { "before": false, "after": true }],
		"brace-style": "error",
		"key-spacing": ["error", {
			"beforeColon": false
		}],
		"no-console": "warn",
		"no-empty": ["error", {
			"allowEmptyCatch": true
		}],
		"prefer-object-spread": "error",
		"space-in-parens": ["error", "never"],
		"arrow-spacing": ["error", {
			"before": true,
			"after": true
		}],
		"dot-notation": "error",
		"indent": ["error", 2],
		"space-unary-ops": "error",
		"padded-blocks": ["error", "never"],
		"quotes": ["error", "single"],
		"prefer-rest-params": "off",
		"comma-dangle": ["error", "never"],
		"newline-per-chained-call": ["error", { "ignoreChainWithDepth": 10 }]
	},
	'overrides': [
		{
			'env': {
				'node': true
			},
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
}
