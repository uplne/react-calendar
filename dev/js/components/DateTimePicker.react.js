import React, {PropTypes} from 'react';
import moment         from 'moment';

import IconTextField  from './IconTextField.react';
import {TimeValidate} from '../utils/TimeValidate';
import Calendar       from './Calendar.react';

export default class DateTimePicker extends React.Component {
    constructor() {
        super();

        this.state = {
            isCalendarOpen: false,
            dateStart: '',
            timeStart: '08:00',
            isTimeValid: true
        };

        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.onCalendarClick = this.onCalendarClick.bind(this);
    }

    openCalendar() {
        this.setState({
            isCalendarOpen: true
        });
    }

    handleTimeChange(id, value) {
        this.setState({
            [id]: value,
            isTimeValid: TimeValidate(value)
        });
        this.validateInputs();
    }

    onCalendarClick(day) {
        this.setState({
            isCalendarOpen: false,
            dateStart: moment(day).format('YYYY-MM-DD') // Convert to ISO8601 format
        });
    }

    getRightMoment() {
        if (this.state.dateStart === '') {
            return '';
        }

        return moment(this.state.dateStart).format('ddd, D MMM');
    }

    validateInputs() {
        return this.state.isTimeValid && this.state.dateStart !== '';
    }

    render () {
        if (this.props.isOneDayPickerOpen) {
            return (
                <div className="date-time-picker box--small">
                    <h4>Select date and time</h4>
                    <div className="date-time-picker__input-box">
                        <IconTextField
                            id="dateStart"
                            name="dateStart"
                            classNames="input input--clean"
                            value={this.getRightMoment()}
                            onFocus={this.openCalendar}
                            onChange={this.validateInputs}>
                            <svg className="icontextfield__icon" viewBox="0 0 20 20"><path d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z"/></svg>
                        </IconTextField>
                        <IconTextField
                            id="timeStart"
                            name="timeStart"
                            classNames="input input--clean"
                            value={this.state.timeStart}
                            valid={this.state.isTimeValid}
                            onBlur={this.handleTimeBlur}
                            onChange={this.handleTimeChange}>
                            <svg className="icontextfield__icon" viewBox="0 0 32 32"><path d="M20.586 23.414L14 16.828V8h4v7.172l5.414 5.414zM16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 28C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/></svg>
                        </IconTextField>
                    </div>
                    <button
                        disabled={!this.validateInputs()}
                        className="btn btn--small btn--primary date-time-picker__btn"
                        onClick={() => this.props.onSave(this.state)}>Save</button>
                    <Calendar
                        dateStart={moment()}
                        isCalendarOpen={this.state.isCalendarOpen}
                        onClick={this.onCalendarClick} />
                </div>
            );
        } else {
            return false;
        }
    }
}

DateTimePicker.propTypes = {
    onSave: PropTypes.func.isRequired,
    isOneDayPickerOpen: PropTypes.bool.isRequired
};