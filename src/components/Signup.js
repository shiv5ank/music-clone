const Signup = () => {
  return (
    <div classname="signup_card">
      <h1 classname="header">Sign Up</h1>
      <div classname="form_container">
        <div classname="name_container">
          <div classname="firstName_container">
            <h4>First Name</h4>
            <input type="text"></input>
          </div>
          <div classname="lastName_container">
            <h4>Last Name</h4>
            <input type="text"></input>
          </div>
        </div>
        <div classname="email_container">
          <h4>Email</h4>
          <input type="text"></input>
        </div>
        <div classname="pasword_container">
          <h4>Password</h4>
          <input type="text"></input>
        </div>
        <div classname="confirmPassword_container">
          <h4>Re-enter Password</h4>
          <input type="text"></input>
        </div>
        <div classname="checkbox_container">
          <input type="checkbox"></input>
          <p>
            I've read and agree with Terms and Service and our Privacy Policy
          </p>
        </div>
        <div classname="btn-container">
          <button classname="signUp-btn">Sign up</button>
        </div>
        <h4 classname="or">OR</h4>
        <div classname="signupWith_container">
          <button classname="google_signup_container">
            <a href="https://accounts.google.com" classname="google_link">
              <div classname="google-signup-innerbtn">
                <div classname="google-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </div>
                <h5 classname="google">Sign up with Google</h5>
              </div>
            </a>
          </button>
          <button classname="facebook_singup_container">
            <a href="https://www.facebook.com/login.php">
              <div classname="facebook-signup-innerbtn">
                <div classname="facebook-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#2aa4f4"></stop>
                      <stop offset="1" stop-color="#007ad9"></stop>
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    ></path>
                  </svg>
                  <h5 classname="facebook">Sign up with Facebook</h5>
                </div>
              </div>
            </a>
          </button>
        </div>
        <div classname="signIn-container">
          <div classname="signIn">
            Already have an account? <a href="./">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
