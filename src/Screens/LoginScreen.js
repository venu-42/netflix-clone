import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import { auth } from "../firebase";
import firebase from 'firebase'

function LoginScreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [sign, setSign] = useState(false);

  const signInWithGoogle=(e)=>{
    e.preventDefault();
    
    let provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
    .then((result)=>{
      console.log('Ho,here is the result',result);
    })
    .catch((error)=>{
      console.log('google Auth failed!!',error.message);
    })
  }

  const register = (e) => {
    e.preventDefault();



    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((user) => console.log(user))
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(emailref.current.value,passwordref.current.value)
    .then(user=>console.log(user))
    .catch(error=>alert(error.message));
  };

  //signIn component
  const SignInScreen = () => {
    return (
      <>
        <div className="signInModal">
          <h3>Sign In</h3>
          <form>
            <input ref={emailref} type="email" placeholder="Email Address" />
            <input ref={passwordref} type="password" placeholder="password" />
            <button className="submitBtn" type="submit" onClick={signIn}>
              Sign In
            </button>
            <p className="mt-3">
              New To Netflix?{" "}
              <button className='submitBtn netflixBtn' onClick={(e) => register(e)}>
                Sign Up Now
              </button>
              <button className='submitBtn googleBtn' onClick={signInWithGoogle}>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google.png" width="30px"/> &nbsp;Sign Up With Google
              </button>
              <button className='submitBtn googleBtn' onClick={()=>{}}>
                <img src="https://pngimg.com/uploads/github/github_PNG83.png" width="30px"/> &nbsp;Sign Up With GitHub
              </button>
            </p>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__header">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix logo"
          className="logo"
        />
        <button className="signupbtn" onClick={() => setSign(!sign)}>
          {!sign ? "Sign In" : "Sign Up"}
        </button>
      </div>

      {sign ? (
        <SignInScreen />
      ) : (
        <div className="loginScreen__body">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="submitBtn">Get Started</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginScreen;
