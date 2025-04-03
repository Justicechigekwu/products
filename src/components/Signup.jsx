import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault(); // Prevent page reload

    const { name, email, password, repassword } = formData;

    if (password !== repassword) {
      alert("Password and confirm password do not match");
      return;
    }

    if (password.length < 8) {
      alert("Password must be more than 8 characters");
      return;
    }

    // alert("Login successful!");
    Navigate('/')

  };

  return (
    <div className="formContainer">
      <h1>Register</h1>
      <form onSubmit={validateForm}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="repassword"
        placeholder="Confirm Password"
        value={formData.repassword}
        onChange={handleChange}
        required
      />
      <button className="signup" type="submit">Sign up</button>

    <div className="forgetp">
      <p>Already have an account? <a href="/Login">Login</a></p>
      <p>Forgot Password? <a href="/Reset">Reset</a></p>
    </div>
    
    </form>
    </div>
  );
};



export default Signup