import React from 'react';
import './styles.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  onInputChange = event => {
    const {
      name,
      value,
    } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  auth = event => {
    const {
      username,
      password,
    } = this.state;
    event.preventDefault();
    if (username === 'Admin' && password === '12345') {
      console.log('Successfully signed in');
    } else {
      this.setState({
        ...this.state,
        message: 'Incorrect username and password',
      });
    }
  };

  render() {
    const {
      username,
      password,
      message,
    } = this.state;
    return (
      <form className="login">
        <h1 className="login__title">Log In</h1>
        <label>
          <input
            type="text"
            name="username"
            className="input login__input"
            placeholder="Username"
            value={username}
            onChange={this.onInputChange}
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            className="input login__input"
            placeholder="*******"
            value={password}
            onChange={this.onInputChange}
            required
          />
        </label>
        <p className="login__message">{message}</p>
        <input
          type="submit"
          className="login__button"
          onClick={this.auth}
          value="Log in"
        />
      </form>
    );
  }
}

export default Login;
