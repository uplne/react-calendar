import React from 'react';

import {getCalendarData} from './CalendarCtrl';

export default class Calendar extends React.Component {
    render () {
        const data = getCalendarData();

        return (
            <div className="datepicker box box--styled">
                <table className="datepicker__table">
                    <thead className="datepicker__header">
                        <tr>
                            <td colSpan="5"><span>{data.month}</span></td>
                            <td><i className="datepicker__arrow datepicker__arrow--left">Prev</i></td>
                            <td><i className="datepicker__arrow datepicker__arrow--right">Next</i></td>
                        </tr>
                    </thead>
                    <tbody className="datepicker__week">
                        <tr>
                            <td><b className="datepicker__day">DayName</b></td>
                        </tr>
                        <tr className="week">
                            <td className="datepicker__day">Num</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}