import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  submitInspiration = (event) => {
    event.preventDefault();
      const newKittenInspiration = {
        id: Date.now(),
        ...this.state
      }
      this.props.addKittenInspiration(newKittenInspiration);
      this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' });
  }
  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitInspiration(event)}>Kitten Inspiration</button>
      </form>
    )
  }
}

export default Form;
