import React from 'react';

import TimeWizard from './components/TimeWizard.react';

export default class App extends React.Component {
	constructor() {
		super();

        this.state = {
            isWizardOn: false
        }

        this.startAddTimeWizard = this.startAddTimeWizard.bind(this);
        this.pageClick = this.pageClick.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
        this.submitWizard = this.submitWizard.bind(this);
	}

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick, false);
    }

    startAddTimeWizard() {
        this.setState({
            isWizardOn: true
        });
    }

    pageClick(e) {
        console.log(this.mouseIsDownOnWizard);
        if (this.mouseIsDownOnWizard) {
            return;
        }

        this.setState({
            isWizardOn: false
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
            isWizardOn: false
        });
    }

    render () {
        console.log('isWizardOn: ', this.state.isWizardOn);
        const timewizardRender = (this.state.isWizardOn) ? <TimeWizard submitWizard={this.submitWizard} onMouseDown={this.mouseDownHandler} onMouseUp={this.mouseUpHandler}/> : false;

        return (
            <div className="time-wizard-wrap">
               <button onClick={this.startAddTimeWizard}>Add time</button>
               {timewizardRender}
            </div>
        );
    }
}