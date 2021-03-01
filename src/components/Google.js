import React from 'react';
import GoogleLogin from 'react-google-login';

const Google = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <>
<GoogleLogin
    clientId="1101267000-7qmis3r233qp9igdsljr4k7upfcq3npl.apps.googleusercontent.com"
    buttonText="CONTINUE WITH GOOGLE"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </>
  );
}

export default Google;