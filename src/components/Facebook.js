import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked = (response) => {
    console.log(response)
}
  return (
    <>
    <FacebookLogin
    appId="448524873259995"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
    </>
  );
}
export default Facebook;