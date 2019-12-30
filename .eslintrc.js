const warn = 'warn'
const off = 'off'
const tab = 'tab'
const error = 'error'
const always = 'always'
const never = 'never'

const indent = [
	warn,
	tab,
	{
		FunctionExpression: {
			parameters: 1,
		},
		FunctionDeclaration: {
			parameters: 1,
		},
		CallExpression: {
			arguments: 1,
		},
		MemberExpression: 1,
		SwitchCase: 1,
	},
]

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', '@typescript-eslint'],
	globals: {},
	env: {
		browser: true,
		es6: true,
		node: true,
		worker: true,
		jasmine: true,
		jest: true,
	},
	extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/no-use-before-define': off,

		//'prefer-stateless-function' : warn,'
		complexity: [warn, 10],
		'no-console': off,
		'no-unused-vars': warn,
		indent: indent,
		'no-const-assign': error,

		// No bloated code
		'no-alert': warn,
		quotes: [warn, 'single'],
		semi: [warn, 'never'],
		'no-global-assign': warn,
		'no-global-assign': warn,

		// Code quality
		'multiline-ternary': [warn, 'always'],
		'no-unexpected-multiline': error,
		'prefer-const': warn,
		'no-empty': warn,
		'no-shadow': warn,
		'no-invalid-this': warn,
		'consistent-return': warn,
		'func-names': [warn, always],
		'func-style': [warn, 'declaration', { allowArrowFunctions: true }],
		'vars-on-top': warn,
		'global-require': warn,
		'init-declarations': [warn, always],
		'no-use-before-define': [warn, { functions: false }],

		// es6 stuff
		'arrow-spacing': warn,
		'no-var': warn,
		'prefer-rest-params': warn,
	},
}
