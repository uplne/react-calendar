import React, {PropTypes} from 'react';

import TimeWizardOptionList from './TimeWizardOptionList.react';
import DateTimePicker from './DateTimePicker.react';

export default class TimeWizardBox extends React.Component {
	constructor() {
		super();

		this.state = {
			isOptionListOpen: false,
			isOneDayPickerOpen: false
		};

		this.openOneDayPicker = this.openOneDayPicker.bind(this);
		this.openDayRangePicker = this.openDayRangePicker.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	componentDidMount() {
		this.setState({
			isOptionListOpen: true
		});	
	}

	openOneDayPicker() {
		this.setState({
			isOptionListOpen: false,
			isOneDayPickerOpen: true
		});
	}

	openDayRangePicker() {

	}

	onSave(data) {
		this.setState({
			isOptionListOpen: true,
			isOneDayPickerOpen: false
		});
		this.props.submitWizard(data);
	}

    render () {
        return (
            <div className="time-wizard box--shadow" onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp}>
            	<TimeWizardOptionList 
            		isOptionListOpen={this.state.isOptionListOpen}
            		openOneDayPicker={this.openOneDayPicker}
            		openDayRangePicker={this.openDayRangePicker} />
                <DateTimePicker 
                    onSave={this.onSave}
                    isOneDayPickerOpen={this.state.isOneDayPickerOpen} />
            </div>
        );
    }
}

TimeWizardBox.propTypes = {
    submitWizard: PropTypes.func.isRequired
};