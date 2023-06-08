// deno-lint-ignore-file no-explicit-any
import { camelCase } from './deps.ts';

type AnyObject = Record<string, any>;

export const camelizeKeys = (object: AnyObject): AnyObject => {
	if (typeof object !== 'object' || object === null) return object;
	let camelizedObject: any;
	if (Array.isArray(object)) {
		camelizedObject = object.map((item) => camelizeKeys(item));
	} else {
		camelizedObject = {};
		Object.entries(object).forEach(([key, value]) => {
			camelizedObject[camelCase(key)] = camelizeKeys(value);
		});
	}
	return camelizedObject;
};
