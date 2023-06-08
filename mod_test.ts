import { assertEquals } from './deps_test.ts';
import { camelizeKeys } from './mod.ts';

Deno.test('basic test', () => {
	const actual = {
		'snake_case': {
			'camelCase': ['item', { 'snake_case': 1 }],
		},
		'bonjour': {
			'snake_case': 'yes',
		},
		1: 'string.sirup',
	};

	const expected = {
		'snakeCase': {
			'camelCase': ['item', { 'snakeCase': 1 }],
		},
		'bonjour': {
			'snakeCase': 'yes',
		},
		1: 'string.sirup',
	};
	assertEquals(camelizeKeys(actual), expected);
});

Deno.test('null values', () => {
	const actual = {
		errors: [{
			message: 'Permission denied, wrong credentials',
			field: null,
			help: null,
		}],
	};

	const expected = {
		errors: [{
			message: 'Permission denied, wrong credentials',
			field: null,
			help: null,
		}],
	};

	assertEquals(camelizeKeys(actual), expected);
});
