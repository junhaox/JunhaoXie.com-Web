import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
    render: function() {
        return <h1>This is a test</h1>
    }
})

ReactDOM.render(<App />, document.getElementById('app'))