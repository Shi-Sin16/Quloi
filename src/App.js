// import React, { Component } from 'react';
// import './App.css';

// import FacebookLogin from 'react-facebook-login';

// import GoogleLogin from 'react-google-login';

// class App extends Component {

//   render() {

//     const responseFacebook = (response) => {
//       console.log(response);
//     }

//     const responseGoogle = (response) => {
//       console.log(response);
//     }

//     return (
//       <div className="App">
//         <h1>LOGIN TO CONTINUE</h1>

//       <FacebookLogin
//         appId="448524873259995"
//         fields="name,email,picture"
//         callback={responseFacebook}
//       />
//       <br />
//       <br />


//       <GoogleLogin
//         clientId="1101267000-7qmis3r233qp9igdsljr4k7upfcq3npl.apps.googleusercontent.com"
//         buttonText="CONTINUE WITH GOOGLE"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//       />

//       </div>
//     );
//   }
// }

// export default App;

import Google from './components/Google'
import Facebook from './components/Facebook'
import './App.css';

function App() {
  const handleGoogle = () => {
    <allButton />
  }
  return (
    <div className="App">
      <h1>Login To Continue</h1>
      <br />
      <div><Facebook /></div>
      <br/>
      <div onClick={handleGoogle}><Google /></div>
    </div>
  );
}

export default App;
