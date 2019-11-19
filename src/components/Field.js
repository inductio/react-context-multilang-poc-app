import React, {Component} from 'react';
import LanguageContext from "../context/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Iм\'я';

        return (
            <div className="ui field">
                <label htmlFor="">{text}</label>
                <input type="text"/>
            </div>
        )
    }
}

export default Field;