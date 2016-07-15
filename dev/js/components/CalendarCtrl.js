import moment from 'moment';

const i18n = {
    weekdaysShort: ['M','T','W','T','F','S','S']
};

export function getWeeks(startOfTheMonth) {
  return [0, 1, 2, 3, 4, 5].map(offset => startOfTheMonth.clone().add(offset, 'weeks'))
}

export function getMonthName(date) {
  return date.format('MMMM');
}

export function getStartOfTheMonth(date) {
  return date.clone().startOf('month').startOf('isoweek');
}

export function getWeekDayNames() {
  return i18n.weekdaysShort;
}