/* eslint-disable no-magic-numbers */
import { add } from '../src';

describe('add', () => {
	it('should add number', () => {
		expect(add(1, 2)).toBe(3);
	});
});
