import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import { auth,googleProvider,facebookProvider} from "../firebase";
import firebase from 'firebase'
import netflixLogo from "../images/kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03bb4e9d0.753613021530245179741.png";
import { useHistory } from "react-router-dom";

function LoginScreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [sign, setSign] = useState(false);
  const history=useHistory();

  const redirectToHome=()=>{
    history.push('/');
  }
  const signInWithGoogle=(e)=>{
    e.preventDefault();
    

    auth.signInWithPopup(googleProvider)
    .then((result)=>{
      console.log('Ho,here is the result',result);
    })
    // .then(redirectToHome)
    .catch((error)=>{
      console.log('google Auth failed!!',error.message);
    })
    redirectToHome();
  }

  const signInwithFacebook=(e)=>{
    e.preventDefault();
    // facebookProvider.addScope('user_birthday');
    auth.signInWithPopup(facebookProvider)
    .then(user=>{
      console.log('facebook',user);
    })
    .catch((error)=>{
      alert(error.message);
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
      .then(redirectToHome)
      .catch((error) => alert(error.message));

      
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(emailref.current.value,passwordref.current.value)
    .then(user=>console.log(user))
    .then(redirectToHome)
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
            <input ref={passwordref} type="password" placeholder="Password" />
            <button className="submitBtn" type="submit" onClick={signIn}>
              Sign In
            </button>
            <button className='submitBtn netflixBtn' onClick={(e) => register(e)}>
              Sign Up 
            </button>
            <p className="mt-3">
              
              <button className='submitBtn googleBtn' onClick={signInWithGoogle}>
                <img src="https://pngimg.com/uploads/google/google_PNG19635.png" width="30px"/> &nbsp;Sign Up With Google
              </button>
              <button className='submitBtn googleBtn' onClick={signInwithFacebook}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" width="30px"/> &nbsp;Sign Up With Facebook
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
          src={netflixLogo}
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
