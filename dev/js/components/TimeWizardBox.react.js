import React from 'react';

import TimeWizardOptionList from './TimeWizardOptionList.react';
import DateTimePicker from './DateTimePicker.react';

export default class TimeWizardBox extends React.Component {
	constructor() {
		super();

		this.state = {
			isOptionListOpen: false
		};

		this.openOneDayPicker = this.openOneDayPicker.bind(this);
		this.openDayRangePicker = this.openDayRangePicker.bind(this);
	}

	componentDidMount() {
		this.setState({
			isOptionListOpen: true
		});	
	}

	openOneDayPicker() {

	}

	openDayRangePicker() {

	}

    render () {
    	if (this.props.isWizardBoxOpen) {
	        return (
	            <div className="time-wizard box--shadow" onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
	            	<TimeWizardOptionList 
	            		isOptionListOpen={this.state.isOptionListOpen}
	            		openOneDayPicker={this.openOneDayPicker}
	            		openDayRangePicker={this.openDayRangePicker} />
	                <DateTimePicker 
	                    state={this.state} />
	            </div>
	        );
	    } else {
	    	return false;
	    }
    }
}