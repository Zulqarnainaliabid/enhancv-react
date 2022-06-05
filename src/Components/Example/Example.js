import React from 'react'
export default class LoginExample extends React.Component {
  constructor () {
    super ();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind (this);
  }

  handleChange (evt, field) {
    this.setState ({[field]: evt.target.value});
  }

  render () {
      console.log("kkk", this.state ,this.state.email)
      console.log("kkk===",this.state,this.state.password)
    return (
      <form>

        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={event => this.handleChange (event, 'email')}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={event => this.handleChange (event, 'password')}
        />

      </form>
    );
  }
}
