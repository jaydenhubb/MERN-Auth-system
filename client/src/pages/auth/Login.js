import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import PasswodInput from "../../components/passwordInput/PasswodInput";
import { useDispatch, useSelector } from "react-redux";
import { login, RESET } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { validateEmail } from "../../redux/features/auth/authService";
import Loader from "../../components/loading/Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const {email, password } = formData;


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const {isLoading, isLoggedin, isSuccess, message} = useSelector((state)=> state.auth)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async(e) => {
    e.preventDefault()
    if( !email || !password){
      return toast.error("All fields are required")
      
    }
    
    if(!validateEmail){
      return toast.error("Please enter a valid email")
     
    }
    const userData = {
       email, password
    } 
    console.log("jerry");
    await dispatch(login(userData))
  };

  useEffect(()=>{
    if(isSuccess && isLoggedin){
      navigate("/profile")
    
    }
    console.log("james");
    dispatch(RESET())
  },[isLoggedin, isSuccess, dispatch, navigate])
  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader/>}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Sign in with Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <PasswodInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            {/* <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            /> */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
