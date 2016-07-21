import React, {PropTypes} from 'react';
import moment             from 'moment';

import {TimeFormat} from '../utils/TimeValidate';

export default class TimeDisplay extends React.Component {
    constructor() {
        super();
    }

    renderTimes() {
        const data = this.props.data;
        const isDateRange = data.dateStart && data.dateEnd;

        if (isDateRange) {
            const nights = moment(data.dateEnd).diff(moment(data.dateStart), 'days');

            return (
                <div>
                    <h4>From/To: </h4>
                    <p>{TimeFormat(data.dateStart)} {data.timeStart} - {TimeFormat(data.dateEnd)} {data.timeEnd} <span>{nights} nights</span></p>
                </div>
            );
        } else {
            <div>
                <h4>On date: </h4>
                <p>{TimeFormat(data.dateStart)} {data.timeStart}</p>
            </div>
        }
    }

    render() {
        if (this.props.data.dateStart !== '') {
            return (
                <div>
                    {this.renderTimes()}
                </div>
            );
        } else {
            return false;
        }
    }
}

TimeDisplay.propTypes = {
    data: PropTypes.object.isRequired
};

export default TimeDisplay;