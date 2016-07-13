import {expect} from 'chai';

import {TimeCheck, TimeValidate} from '../dev/js/utils/TimeCheck';

describe('TimeValidate', () => {
	it('should return TRUE when 08:00 value send', () => {
		expect(TimeValidate('08:00')).to.be.true;
	});

	it('should return FALSE when 08.00 value send', () => {
		expect(TimeValidate('08.00')).to.be.false;
	});

	it('should return FALSE when 8:00 value send', () => {
		expect(TimeValidate('8:00')).to.be.false;
	});
});