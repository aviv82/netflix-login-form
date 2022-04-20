import "./SignInForm.css";

export const SignInForm = () => {
  return (
    <form action="Sign In">
      <input className="email" type="text" placeholder="Email"></input>
      <input
        className="password"
        type="password"
        placeholder="Password"
      ></input>
      <input type="submit" className="sign-in" href="#"></input>
    </form>
  );
};
