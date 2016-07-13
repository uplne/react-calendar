export function TimeValidate(value) {
	const reg = '^([0-9][0-9]:[0-9][0-9])$';

	return !!value.match(reg);
};