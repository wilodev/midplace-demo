module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
	plugins: ['@typescript-eslint/eslint-plugin', 'import'],
	extends: [
		'universe',
		'universe/native',
		'universe/shared/typescript-analysis',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:import/warnings',
		'plugin:import/typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'jest.config.js', 'metro.config.js'],
	rules: {
		// Reglas para ordenar importaciones
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					'internal',
					['parent', 'sibling', 'index', 'object']
				],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before'
					},
					{
						pattern: 'react-native',
						group: 'external',
						position: 'before'
					},
					{
						pattern: 'react-*',
						group: 'external',
						position: 'before'
					},
					{
						pattern: 'expo*',
						group: 'external',
						position: 'before'
					},
					{
						pattern: '@',
						group: 'external',
						position: 'before'
					},
					{
						pattern: '@/**',
						group: 'internal',
						position: 'before'
					}
				],
				pathGroupsExcludedImportTypes: ['builtin'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		],
		'import/first': 'error',  // Asegura que todas las importaciones estén al inicio del archivo.
		'import/no-duplicates': 'error', // Prohíbe importaciones repetidas desde el mismo módulo.
		'import/newline-after-import': 'error', // Requiere una línea vacía después del último bloque de importaciones.
		'@typescript-eslint/no-explicit-any': 'error', // Prohibir el uso de 'any'
		'no-unused-vars': [
			'warn', // O "error" si quieres que ESLint marque esto como un error
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
		]
	}
};
