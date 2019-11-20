import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from "../context/ColorContext";
import { getLangText } from '../translations';

class Button extends Component {
    renderButton = (value) => {
        return (
            <button className={`ui button ${value}`}>
                <LanguageContext.Consumer>
                    { ({ language }) => getLangText(language, 'button') }
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