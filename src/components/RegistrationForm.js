import React from 'react';
// import ReactDom from 'react-dom';

export default class RegistrationForm extends React.Component{
  render(){
    return (
      <form>
        <input type="text"/>
        <input type="password"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
