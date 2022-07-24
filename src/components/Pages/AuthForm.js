import React from 'react';
import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../Cart/CartContext';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const crtctx = useContext(CartContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) 
    {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8PBwyCtCdMh2P_NhHsVvZULyI-4KNNEQ';
    } 
    else 
    {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8PBwyCtCdMh2P_NhHsVvZULyI-4KNNEQ';
    }
    fetch(url, 
      {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => 
      {
        setIsLoading(false);
        if (res.ok) 
        {
          return res.json();
        } 
        else 
        {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        crtctx.addToken({token: data.idToken});
        localStorage.setItem('emailLoggedIn',enteredEmail.replace("@", "")
        .replace(".", ""));
        localStorage.setItem('loginToken',data.idToken)
        history.replace('/Store')
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  console.log(crtctx.tokens)
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;