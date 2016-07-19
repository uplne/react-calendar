import React, {PropTypes} from 'react';

import TimeWizardBox from './TimeWizardBox.react';
import {TimeFormat} from '../utils/TimeValidate';

export default class TimeWizard extends React.Component {
    constructor() {
        super();

        this.state = {
            isWizardBoxOpen: false,
            timeData: {
                isRange: false,
                dateStart: '',
                timeStart: '08:00'
            }
        };

        this.startAddTimeWizard = this.startAddTimeWizard.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
        this.submitWizard = this.submitWizard.bind(this);
        this.pageClick = this.pageClick.bind(this);
        this.removeDate = this.removeDate.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick, false);
    }

    pageClick(e) {
        if (this.mouseIsDownOnWizard) {
            return;
        }

        this.setState({
            isWizardBoxOpen: false
        });
    }

    startAddTimeWizard() {
        this.setState({
            isWizardBoxOpen: true
        });
    }

    mouseDownHandler() {
        this.mouseIsDownOnWizard = true;
    }

    mouseUpHandler() {
        this.mouseIsDownOnWizard = false;
    }

    submitWizard(state) {
        this.setState({
            isWizardBoxOpen: false,
            timeData: {
                isRange: false,
                dateStart: state.dateStart,
                timeStart: state.timeStart
            }
        });
    }

    renderTimeWizard() {
        if (this.state.isWizardBoxOpen) {
            return (
                <TimeWizardBox
                    onMouseDown={this.mouseDownHandler}
                    onMouseUp={this.mouseUpHandler}
                    submitWizard={this.submitWizard} />
            );
        } else {
            return false;
        }
    }

    renderAddButton() {
        return (this.state.timeData.dateStart === '') ? <button onClick={this.startAddTimeWizard}>Add time</button> : false;
    }

    removeDate() {
        this.resetState();
    }

    resetState() {
        this.setState({
            isWizardBoxOpen: false,
            timeData: {
                isRange: false,
                dateStart: '',
                timeStart: '08:00'
            }
        });
    }

    renderAddedTimes() {
        if (this.state.timeData.dateStart !== '') {
            return (
                <div>
                    <h4>On date: </h4>
                    <p>{TimeFormat(this.state.timeData.dateStart)} {this.state.timeData.timeStart} <button onClick={this.removeDate}>Remove date</button></p>
                </div>
            );
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="time-wizard-wrap" >
               {this.renderAddButton()}
               {this.renderTimeWizard()}
               {this.renderAddedTimes()}
            </div>
        );
    }
}

export default TimeWizard;