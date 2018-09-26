import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'Store/auth/actions';
import { withRouter } from 'react-router-dom';

import './style.css';
import InputGroup from '../common/InputGroup';
import validateInput from './validation';
import { AuthService } from '../../services/fakeApi';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ isLoading: true, errors: {} });

      AuthService.signIn(this.state.loginEmail, this.state.password)
        .then(response => {
          this.props.signIn(response.user, response.token);
          this.props.history.push('/');

        })
        .catch(error => {
          this.setState({ isLoading: false, errors: error.errors });
        });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { loginEmail, password, isLoading, errors } = this.state;
    return (
      <div className="box">
        <form onSubmit={this.onSubmit}>
          <InputGroup
            field="loginEmail"
            label="Email"
            value={loginEmail}
            onChange={this.onChange}
            error={errors.loginEmail}
          />
          <InputGroup
            field="password"
            label="Password"
            value={password}
            type="password"
            onChange={this.onChange}
            error={errors.password}
          />
          <button type='submit' disabled={isLoading}>Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (user, token) => dispatch(signIn({ user, token }))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(LoginForm));
