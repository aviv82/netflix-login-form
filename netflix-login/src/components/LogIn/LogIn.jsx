import "./LogIn.css";
import { SubHeader } from "../SubHeader/SubHeader";
import { SignInForm } from "../SignInForm/SignInForm";

export const LogIn = () => {
  return (
    <div className="login-form-container">
      <SignInForm />
      <SubHeader />
      <hr></hr>
      <img
        src="https://i.postimg.cc/hj9WcgVw/logo.png"
        className="logo"
        alt="logo"
      ></img>
    </div>
  );
};
