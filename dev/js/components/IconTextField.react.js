import React from 'react'; 

export default class IconTextField extends React.Component {
    constructor (props) {
        super();
    }

    handleChange (e) {
        const id = this.props.id;
        this.props.onChange(id, e.target.value);
    }

    renderChildren() {
        if (typeof this.props.valid !== 'undefined' && !this.props.valid) {
            return (
                <svg className="icontextfield__icon error" viewBox="0 0 20 20"><path d="M19.51 17.98L10.605 1.348C10.48 1.133 10.25 1 10 1s-.48.133-.604.348L.49 17.98c-.12.21-.12.47.005.68.125.21.352.34.598.34h17.814c.245 0 .474-.13.598-.34.124-.21.126-.47.006-.68zM11 17H9v-2h2v2zm0-3.5H9V7h2v6.5z"/></svg>
            );
        } else {
            return this.props.children;
        }
    }

    render () {
    	let {
    		id,
            name,
    		classNames,
            value,
            type
    	} = this.props;

    	let inputProps = {
    		id: id,
            name: name,
    		className: classNames,
            value: value,
            type: type || 'text'
    	};

        const classes = (this.props.valid || typeof this.props.valid === 'undefined') ? 'icontextfield' : 'icontextfield error';

        return (
            <div className={classes}>
                <input {...inputProps} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)} onFocus={this.props.onFocus} onBlur={this.props.onBlur} />
                {this.renderChildren()}
            </div>
        );
    }
}