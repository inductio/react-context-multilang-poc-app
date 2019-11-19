import React, {Component} from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from "../context/ColorContext";

class Button extends Component {
    renderSubmit = (value) => {
        return value === 'english' ? 'Submit' : 'Відправити'
    };

    renderButton = (value) => {
        return (
            <button className={`ui button ${value}`}>
                <LanguageContext.Consumer>
                    {this.renderSubmit}
                </LanguageContext.Consumer>
            </button>
        );
    };

    render() {
        return (
            <ColorContext.Consumer>
                {this.renderButton}
            </ColorContext.Consumer>
        )
    }
}

export default Button;