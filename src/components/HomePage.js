import React, { useState } from "react";
import GoogleLogin from "react-google-login";

export default function HomePage() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className=" center align-content-center">
      <h5 className="text-primary"> Login page</h5>
      <GoogleLogin
        clientId="361697230440-raoiie24jp98emdnvstv8ms9bf8chqlq.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy={"single_host_origin"}
        render={(renderprops) => (
          <button
            onClick={renderprops.onClick}
            disabled={renderprops.disabled}
            className="btn btn-success"
          >
            Login with Google
          </button>
        )}
        className="text-dark  btn btn-outline-dark"
      />
    </div>
  );
}
