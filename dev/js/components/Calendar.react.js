import React, {PropTypes} from 'react';

import Week from './Week.react';
import ArrowBtn from './ArrowBtn.react';

import {
    getMonthName,
    getStartOfTheMonth,
    getWeekDayNames,
    getWeeks,
    getCalendarData
} from './CalendarCtrl';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.dateStart
        }

        this.increaseMonth = this.increaseMonth.bind(this);
        this.decreaseMonth = this.decreaseMonth.bind(this);
    }

    increaseMonth() {
        this.setState({
            date: this.state.date.clone().add(1, 'month')
        });
    }

    decreaseMonth() {
        this.setState({
            date: this.state.date.clone().subtract(1, 'month')
        });
    }

    render () {
        if (this.props.isCalendarOpen) {
            const startOfTheMonth = getStartOfTheMonth(this.state.date);
            const monthName = getMonthName(this.state.date);
            const weekDayNames = getWeekDayNames();
            const weeks = getWeeks(startOfTheMonth);

            return (
                <div className="datepicker box box--shadow">
                    <table className="datepicker__table">
                        <thead className="datepicker__header">
                            <tr>
                                <td colSpan="5"><span>{monthName}</span></td>
                                <td>
                                    <ArrowBtn classes="btn btn--clean btn--icon datepicker__arrow datepicker__arrow--left" onClick={this.decreaseMonth}>
                                        <svg viewBox="0 0 20 20"><path d="M12.452 4.516c.446.436.48 1.043 0 1.576L8.705 10l3.747 3.908c.48.533.446 1.14 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695C6.112 10.57 6 10.285 6 10s.112-.57.335-.79c0 0 4.084-4.286 4.502-4.694s1.17-.436 1.615 0z"/></svg>
                                    </ArrowBtn>
                                </td>
                                <td>
                                    <ArrowBtn classes="btn btn--clean btn--icon datepicker__arrow datepicker__arrow--right"  onClick={this.increaseMonth}>
                                        <svg viewBox="0 0 20 20"><path d="M12.452 4.516c.446.436.48 1.043 0 1.576L8.705 10l3.747 3.908c.48.533.446 1.14 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695C6.112 10.57 6 10.285 6 10s.112-.57.335-.79c0 0 4.084-4.286 4.502-4.694s1.17-.436 1.615 0z"/></svg>
                                    </ArrowBtn>
                                </td>
                            </tr>
                        </thead>
                        <tbody className="datepicker__week">
                            <tr>
                                { weekDayNames.map((day, i) => {
                                    return (
                                        <td key={i}><b className="datepicker__day">{day}</b></td>
                                    );
                                })}
                            </tr>
                            { weeks.map((week, i) => {
                                return (
                                    <Week key={i} day={week} shownDate={this.state.date} onClick={this.props.onClick}/>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return false;
        }
    }
}

Calendar.propTypes = {
    dateStart: PropTypes.object,
    onClick: PropTypes.func.isRequired
};