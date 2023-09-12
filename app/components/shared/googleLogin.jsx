import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    // Aquí puedes manejar la respuesta de Google después de la autenticación.
    console.log(response, "GOOGLE");
  };

  return (
    <GoogleLogin
      clientId="TU_CLIENT_ID_DE_GOOGLE"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
