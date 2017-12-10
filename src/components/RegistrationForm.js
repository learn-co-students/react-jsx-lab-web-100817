import React from 'react';


export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="name" />
        <input type="password" name="pass" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
