import React, {PropTypes} from 'react';

import IconTextField from './IconTextField.react';
import {TimeValidate} from '../utils/TimeValidate';

export default class TimeWizard extends React.Component {
    constructor() {
        super();

        this.state = {
            isListOpen: true,
            dateStart: '',
            timeStart: '08:00',
            isTimeValid: true,
            isCalendarOpen: false
        };

        this.openOneDayPicker = this.openOneDayPicker.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTimeBlur = this.handleTimeBlur.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
    }

    openOneDayPicker() {
        this.setState({
            isListOpen: false,
            isDayPickerOpen: true
        });
    }

    openDayRangePicker() {

    }

    handleChange() {

    }

    handleTimeChange(id, value) {
        this.setState({
            [id]: value
        });
    }

    handleTimeBlur() {
        this.setState({
            isTimeValid: TimeValidate(this.state.timeStart)
        });
    }

    renderList() {
        if (this.state.isListOpen) {
            return (
                <ul className="list time-wizard__box">
                    <li className="list__item time-wizard__list-item" onClick={this.openOneDayPicker}>
                        <p>Date</p>
                    </li>
                    <li className="list__item time-wizard__list-item" onClick={this.openDayRangePicker}>
                        <p>Date range</p>
                    </li>
                </ul>
            );
        } else {
            return false;
        }
    }

    openCalendar() {
        this.setState({
            isCalendarOpen: true
        });
    }

    renderCalendar() {
        if (this.state.isCalendarOpen) {
            return (<div>Calendar</div>);
        } else {
            return false;
        }
    }

    renderDayPicker() {
        if (this.state.isDayPickerOpen) {
            return (
                <div className="date-time-picker box--small">
                    <h4>Select date and time</h4>
                    <div className="date-time-picker__input-box">
                        <IconTextField
                            id="dateStart"
                            name="dateStart"
                            classNames="input input--clean"
                            value={this.state.dateStart}
                            onFocus={this.openCalendar}
                            onChange={this.handleChange}>
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
                    <button disabled={!this.state.isTimeValid} className="btn btn--small btn--primary date-time-picker__btn" onClick={() => this.props.submitWizard(this.state)}>Save</button>
                </div>
            );
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="time-wizard box--shadow" onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
                {this.renderList()}
                {this.renderDayPicker()}
                {this.renderCalendar()}
            </div>
        );
    }
}

export default TimeWizard;