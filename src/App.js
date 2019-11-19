import React, {Component} from 'react';

class App extends Component {
    state = {language: 'english'};

    render() {
        return (
            <div className="ui container">
              <div>
                Select a language:
                <i className="flag us"/>
                <i className="flag ua"/>
              </div>
            </div>
        )
    }
}

export default App;
