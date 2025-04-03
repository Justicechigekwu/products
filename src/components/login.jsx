import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const Navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validateLogin = (e) => {
    e.preventDefault(); // Prevent page reload

    const { email, password } = loginData;

    if (password.length < 8) {
      alert("Password must be more than 8 characters");
      return;
    }

    // alert("Login successful!");
    Navigate('/')
  };


  return (
    <div className="loginForm">
      <form onSubmit={validateLogin} className="loginContainer">
      <h1>Login</h1>
      <label className="loginInput" htmlFor="email">Enter your email</label>
      <input 
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        required
      />
      
      <label className="loginInput" htmlFor="password">Enter your password</label>
      <input 
         type="password"
         name="password"
         value={loginData.password}
         onChange={handleChange}
         required
      />
      
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};

export default Login;