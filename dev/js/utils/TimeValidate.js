import moment from 'moment';

export function TimeValidate(value) {
	const reg = '^([0-9][0-9]:[0-9][0-9])$';

	return !!value.match(reg);
};

export function TimeFormat(date) {
	return moment(date).format('ddd, D MMM')
}