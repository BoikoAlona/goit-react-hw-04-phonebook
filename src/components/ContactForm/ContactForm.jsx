import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      [target.number]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const formData = {
      name,
      number,
    };

    this.props.addFriend(formData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>
          Name:
          <input
            className={css.formInput}
            id="inputName"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={css.formLabel}>
          Number:
          <input
            className={css.formInput}
            id="inputNumber"
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }
}

export { ContactForm };
