import React, {PropTypes} from 'react';

export default class TimeWizardOptionList extends React.Component {
    render () {
        if (this.props.isOptionListOpen) {
            return (
                <ul className="list time-wizard__box">
                    <li className="list__item time-wizard__list-item" onClick={this.props.openOneDayPicker}>
                        <p>Date</p>
                    </li>
                    <li className="list__item time-wizard__list-item" onClick={this.props.openDayRangePicker}>
                        <p>Date range</p>
                    </li>
                </ul>
            );
        } else {
            return false;
        }
    }
}

TimeWizardOptionList.propTypes = {
    isOptionListOpen: PropTypes.bool.isRequired,
    openOneDayPicker: PropTypes.func.isRequired,
    openDayRangePicker: PropTypes.func.isRequired
}