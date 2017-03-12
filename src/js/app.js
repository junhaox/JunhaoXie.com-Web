import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Title</h3>
                <p>This is a test</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));