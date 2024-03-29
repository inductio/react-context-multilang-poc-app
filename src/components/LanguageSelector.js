import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    renderLangBtn = (lang, flagIconKey) => {
        return (
            <button className="ui button basic" onClick={() => this.context.onLanguageChange(lang)}>
                <i className={`flag ${flagIconKey}`}/> <span>{lang}</span>
            </button>
        )
    };

    render() {
        return (
            <div>
                <span>Select a language: </span>
                {this.renderLangBtn('english', 'us')}
                {this.renderLangBtn('ukrainian', 'ua')}
            </div>
        )
    }
}

export default LanguageSelector;