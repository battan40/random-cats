import React, { Component } from 'react';
import Kittens from '../Kittens/Kittens'
import Form from '../Form/Form'
import { fetchKitties } from '../../Utils/APIcalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      error: '',
    }
  }

  addKittenInspiration = (newKittenInspiration) => {
    this.setState({ kitties: [...this.state.kitties, newKittenInspiration]})
  }

  deleteForgoneInspiration = (id) => {
    const filteredKittens = this.state.kitties.filter(kitty => kitty.id !== id);
    this.setState({ kitties: filteredKittens });
  }

  favoriteKit = (id) => {
  const findKit = this.state.kitties.find(kit => kit.id === id)
    findKit.isFavorite = !findKit.isFavorite
    this.setState( { kitties: [...this.state.kitties] });
  }
  componentDidMount = async () => {
    await fetchKitties()
    .then(data => this.setState({ kitties: [...this.state.kitties, data]}))
    console.log(this.state.kitties)
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Welcome Kitten Enthusiasts!</h1>
          {!this.state.kitties.length && <h2>No new inspirations yet -- add some!</h2> }
        </header>
        <Form addKittenInspiration={this.addKittenInspiration} />
        <Kittens kittens={this.state.kitties} deleteForgoneInspiration={this.deleteForgoneInspiration}
        favoriteKit={this.favoriteKit} />
      </main>
    );
  }
}

export default App;
