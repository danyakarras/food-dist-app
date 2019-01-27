import React from 'react';
import Credentials from './GoogleAuthCredentials.json';

class GoogleAuth extends React.Component {
  state = {
    auth: null,
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: Credentials.CLIENT_ID,
          scope: 'email'
        })
        .then(() => {
          this.setState({
            auth: gapi.auth2.getAuthInstance(),
            isSignedIn: gapi.auth2.getAuthInstance().isSignedIn.get()
          });
        });
    });
  }

  render() {
    console.log(this.state);
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
