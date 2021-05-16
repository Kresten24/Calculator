import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button name={this.props.name}>{this.props.calculatorKey}</button>
        )
    }

}
export default Button;