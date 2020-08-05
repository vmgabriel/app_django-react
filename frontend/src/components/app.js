import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: 'loading'
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        data: [
          {
            "id": "1",
            "name": "hello",
            "email": "email@correo.com"
          },
          {
            "id": "2",
            "name": "world",
            "email": "email1@correo.com"
          }
        ],
        loaded: true
      };
    });
  }

  getItemList(contact) {
    return (
        <li key={contact.id}>{contact.name} - {contact.email}</li>
    );
  }

  render() {
    return (
      <ul>
        {this.state.data.map(this.getItemList)}
      </ul>
    );
  }
}

export default App;

const container = document.getElementById('app');
render(<App />, container);
