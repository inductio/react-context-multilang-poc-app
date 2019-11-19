import React, {Component} from 'react';
import LanguageContext from '../context/LanguageContext';
import { getLangText } from '../translations';

class Field extends Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div className="ui field">
                <label htmlFor="">
                    {getLangText(this.context.language, 'field')}
                </label>
                <input type="text"/>
            </div>
        )
    }
}

export default Field;