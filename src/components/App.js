import React, {Component} from 'react';
import UserCreate from './UserCreate';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends Component {
    state = {language: 'english'};

    onLanguageChange(language) {
        this.setState({language});
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag ua" onClick={() => this.onLanguageChange('українська')}/>
                    {this.state.language}
                </div>
                <div>
                    <ColorContext.Provider value="red">
                        <LanguageContext.Provider value={this.state.language}>
                            <UserCreate/>
                        </LanguageContext.Provider>
                    </ColorContext.Provider>
                </div>
            </div>
        )
    }
}

export default App;
