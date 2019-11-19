import React, {Component} from 'react';
import LanguageContext from "../context/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;

    renderName = ({language}) => {
        return language === 'english' ? 'Name' : 'Iм\'я';
    };

    render() {
        return (
            <div className="ui field">
                <label htmlFor="">{this.renderName(this.context)}</label>
                <input type="text"/>
            </div>
        )
    }
}

export default Field;