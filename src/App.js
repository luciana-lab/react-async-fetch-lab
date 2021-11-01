// create your App component here
import React from 'react';
class App extends React.Component {
    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => this.setState({ spacePeople: data.people }))
    }

    render() {
        return (
            <ul>
                {this.state.spacePeople.map(person => <li>{`${person.name}`}</li>)}
            </ul>
        )
    }
}

export default App;