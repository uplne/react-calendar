import React from 'react';

import TimeWizard from './components/TimeWizard.react';

export default class App extends React.Component {
	constructor() {
		super();
	}

    render () {
        return (
            <TimeWizard />
        );
    }
}