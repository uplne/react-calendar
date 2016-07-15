import React, {PropTypes} from 'react';

import Day from './Day.react';

import {
    getMonthName
} from './CalendarCtrl';

export default class Week extends React.Component {
    onClick(day) {
        this.props.onClick(day);
    }

    render () {
        const startOfWeek = this.props.day.clone().startOf('isoweek');

        return (
            <tr className="week">
                { [0, 1, 2, 3, 4, 5, 6].map(offset => {
                    const day = startOfWeek.clone().add(offset, 'days');

                    return (
                        <Day key={offset} day={day} shownDate={this.props.shownDate} onClick={this.onClick.bind(this, day)} />
                    );
                })}
            </tr>
        );
    }
}

Week.propTypes = {
    shownDate: PropTypes.object.isRequired,
    day: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};