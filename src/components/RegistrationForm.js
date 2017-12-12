
import React from 'react'

class  RegistrationForm extends React.Component {
  render() {
    return (
        <form>
        <input type="text" name="firstname"/>
        <input type="password" name="password"/>
        <button type="submit">Submit</button>
        </form>
    );
  }
}

export default RegistrationForm;
