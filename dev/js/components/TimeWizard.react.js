import React, {PropTypes} from 'react';

import TimeWizardBox from './TimeWizardBox.react';

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
        console.log('submitWizard');
        this.setState({
            isWizardBoxOpen: false
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

    render() {
        return (
            <div className="time-wizard-wrap" >
               <button onClick={this.startAddTimeWizard}>Add time</button>
               {this.renderTimeWizard()}
            </div>
        );
    }
}

export default TimeWizard;