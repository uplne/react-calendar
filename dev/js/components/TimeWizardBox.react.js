import React, {PropTypes} from 'react';
import moment         from 'moment';
import classnames     from 'classnames';

import IconTextField  from './IconTextField.react';
import {TimeValidate, TimeFormat} from '../utils/TimeValidate';
import Calendar       from './Calendar.react';

export default class TimeWizardBox extends React.Component {
	constructor() {
		super();

		this.state = {
            isCalendarOpen: false,
            dateStart: '',
            timeStart: '',
            dateEnd: '',
            timeEnd: ''
        };

		this.onSave = this.onSave.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.onCalendarClick = this.onCalendarClick.bind(this);
	}

	onSave() {
		this.props.submitWizard(this.state);
	}

	openCalendar(e) {
        this.setState({
            isCalendarOpen: true,
            calendarRef: e.target.id
        });
    }

    handleTimeChange(id, value) {
        this.setState({
            [id]: value,
        });
    }

    onCalendarClick(day) {
        this.setState({
            isCalendarOpen: false,
            [this.state.calendarRef]: moment(day).format('YYYY-MM-DD'), // Convert to ISO8601 format,
            calendarRef: ''
        });
    }

    getRightMoment(type) {
        if (this.state[type] === '') {
            return '';
        }

        return TimeFormat(this.state[type]);
    }

    renderCalendar() {
    	const isPositionRight = (this.state.calendarRef !== 'dateStart');

    	if (this.state.isCalendarOpen) {
	    	return (
	    		<Calendar
	    			isPositionRight={isPositionRight}
		            dateStart={moment()}
		            onClick={this.onCalendarClick} />
		    );
		} else {
			return false;
		}
    }

    render () {
        return (
            <div className="time-wizard box--small box--shadow" onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
            	<div className="date-time-picker date-time-picker--first">
                    <h4>Start date and time</h4>
                    <div className="date-time-picker__input-box">
                        <IconTextField
                            id="dateStart"
                            name="dateStart"
                            classNames="input input--clean"
                            value={this.getRightMoment('dateStart')}
                            onFocus={this.openCalendar}>
                            <svg className="icontextfield__icon" viewBox="0 0 20 20"><path d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z"/></svg>
                        </IconTextField>
                        <IconTextField
                            id="timeStart"
                            name="timeStart"
                            classNames="input input--clean"
                            placeholder="08:00"
                            value={this.state.timeStart}
                            valid={this.state.isTimeValid}
                            onChange={this.handleTimeChange}>
                            <svg className="icontextfield__icon" viewBox="0 0 32 32"><path d="M20.586 23.414L14 16.828V8h4v7.172l5.414 5.414zM16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 28C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/></svg>
                        </IconTextField>
                    </div>
                </div>
                <div className="date-time-picker">
                    <h4>End date and time <span className="date-time-picker__info">(optional)</span></h4>
                    <div className="date-time-picker__input-box">
                        <IconTextField
                            id="dateEnd"
                            name="dateEnd"
                            classNames="input input--clean"
                            value={this.getRightMoment('dateEnd')}
                            onFocus={this.openCalendar}>
                            <svg className="icontextfield__icon" viewBox="0 0 20 20"><path d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z"/></svg>
                        </IconTextField>
                        <IconTextField
                            id="timeEnd"
                            name="timeEnd"
                            classNames="input input--clean"
                            placeholder="08:00"
                            value={this.state.timeEnd}
                            valid={this.state.isTimeValid}
                            onChange={this.handleTimeChange}>
                            <svg className="icontextfield__icon" viewBox="0 0 32 32"><path d="M20.586 23.414L14 16.828V8h4v7.172l5.414 5.414zM16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 28C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/></svg>
                        </IconTextField>
                    </div>
                </div>
                <button
                    className="btn btn--small btn--primary date-time-picker__btn"
                    onClick={this.onSave}>Save</button>
                {this.renderCalendar()}
            </div>
        );
    }
}

TimeWizardBox.propTypes = {
    submitWizard: PropTypes.func.isRequired
};