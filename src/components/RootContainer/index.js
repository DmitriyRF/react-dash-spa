import React, { Component } from 'react';
import { signIn } from 'Store/auth/actions';
import connect from 'react-redux/es/connect/connect';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes';
import { AuthService } from '@/services/fakeApi';
import Cookies from 'js-cookie';

class RootContainer extends Component {
  componentWillMount() {
    this.reviveSession();
  }

  reviveSession() {
    const token = Cookies.get('token');
    const user = AuthService.reviveSession(token);
    if (user) {
      this.props.signIn(user, token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signIn: (user, token) => dispatch(signIn({ user, token }))
});

export default connect(
  null,
  mapDispatchToProps
)(RootContainer);
