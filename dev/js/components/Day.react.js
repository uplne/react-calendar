import React, {PropTypes} from 'react';
import moment     from 'moment';
import classNames from 'classnames';

export default class Day extends React.Component {
    isSameDay(moment1, moment2) {
        return moment1.isSame(moment2, 'day');
    }

    isDisabled(moment1, moment2) {
        return !moment1.isSame(moment2, 'month');
    }

    getClassNames() {
        return classNames('datepicker__day', {
            'datepicker__day--disabled': this.isDisabled(this.props.day, this.props.shownDate),
            'datepicker__day--today': this.isSameDay(this.props.day, moment())
        });
    }

    render() {
        return (
            <td className={this.getClassNames()} onClick={this.props.onClick}>{this.props.day.date()}</td>
        );
    }
}

Day.propTypes = {
    shownDate: PropTypes.object.isRequired,
    day: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};