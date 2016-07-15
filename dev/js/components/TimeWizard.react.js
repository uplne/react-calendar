import React, {PropTypes} from 'react';

import DateTimePicker from './DateTimePicker.react';

export default class TimeWizard extends React.Component {
    constructor() {
        super();

        this.state = {
            isListOpen: true
        };

        this.openOneDayPicker = this.openOneDayPicker.bind(this);
    }

    openOneDayPicker() {
        this.setState({
            isListOpen: false,
            isDayTimePickerOpen: true
        });
    }

    openDayRangePicker() {

    }

    handleChange() {

    }

    // To choose between some option e.g. Date, Date range...
    renderOptionList() {
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

    render() {
        return (
            <div className="time-wizard box--shadow" onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
                {this.renderOptionList()}
                <DateTimePicker 
                    state={this.state} />
            </div>
        );
    }
}

export default TimeWizard;